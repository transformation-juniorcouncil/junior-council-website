#!/usr/bin/env node
/**
 * gmail-draft.mjs — place an outreach email as a DRAFT into a director's mailbox.
 *
 * Uses the `jc-draft-writer` service account (domain-wide delegation, gmail.compose
 * scope). It impersonates the director mailbox and writes a draft into that mailbox's
 * Drafts folder. The compose scope CANNOT send mail and CANNOT read inboxes — drafts only.
 * A human opens the draft and hits send.
 *
 * SAFETY: defaults to a dry-run preview. Nothing touches Gmail unless you pass --create.
 * Only mailboxes listed in GMAIL_DRAFT_INBOXES are allowed.
 *
 * Usage:
 *   node --env-file=.env.local scripts/gmail-draft.mjs \
 *     --as corporate@juniorcouncil.org \
 *     --to contact@prospect.com \
 *     --subject "Partnering on Snowball 2027" \
 *     --body-file ./draft.txt \
 *     [--from-name "Junior Council — Corporate"] [--cc someone@x.com] \
 *     [--create]        # actually create the draft (omit for a dry-run preview)
 *
 * Env (from .env.local):
 *   GMAIL_SA_KEY_PATH   path to the service-account JSON key (local dev), OR
 *   GMAIL_SA_KEY_JSON   the JSON key contents as a string (Vercel/prod)
 *   GMAIL_DRAFT_INBOXES comma-separated allowlist of mailboxes we may draft into
 */

import { readFileSync, existsSync } from 'node:fs';
import { google } from 'googleapis';

// --- minimal .env.local loader (fallback for Node without --env-file) ----------
function loadEnvLocal() {
  const needed = ['GMAIL_SA_KEY_PATH', 'GMAIL_SA_KEY_JSON', 'GMAIL_DRAFT_INBOXES'];
  if (needed.some((k) => process.env[k])) return; // already loaded (e.g. --env-file)
  if (!existsSync('.env.local')) return;
  for (const line of readFileSync('.env.local', 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !line.trimStart().startsWith('#')) {
      const [, k, v] = m;
      if (!process.env[k]) process.env[k] = v.replace(/^["']|["']$/g, '');
    }
  }
}

// --- arg parsing ---------------------------------------------------------------
function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith('--')) args[key] = true; // boolean flag
      else { args[key] = next; i++; }
    }
  }
  return args;
}

function die(msg) {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
}

// --- MIME helpers --------------------------------------------------------------
function encodeHeaderWord(s) {
  // RFC 2047 encoded-word for non-ASCII header values (e.g. subject / display name)
  // eslint-disable-next-line no-control-regex
  if (/^[\x00-\x7F]*$/.test(s)) return s;
  return `=?UTF-8?B?${Buffer.from(s, 'utf8').toString('base64')}?=`;
}

function buildMime({ as, fromName, to, cc, subject, body }) {
  const from = fromName ? `${encodeHeaderWord(fromName)} <${as}>` : as;
  const headers = [
    `From: ${from}`,
    `To: ${to}`,
    ...(cc ? [`Cc: ${cc}`] : []),
    `Subject: ${encodeHeaderWord(subject)}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset="UTF-8"',
    'Content-Transfer-Encoding: base64',
  ];
  const encodedBody = Buffer.from(body, 'utf8').toString('base64').replace(/(.{76})/g, '$1\r\n');
  return `${headers.join('\r\n')}\r\n\r\n${encodedBody}`;
}

function toBase64Url(str) {
  return Buffer.from(str, 'utf8').toString('base64')
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

// --- main ----------------------------------------------------------------------
async function main() {
  loadEnvLocal();
  const args = parseArgs(process.argv.slice(2));

  const as = args.as;
  const to = args.to;
  const subject = args.subject;
  const body = args['body-file']
    ? readFileSync(args['body-file'], 'utf8')
    : args.body;
  const fromName = args['from-name'] || undefined;
  const cc = args.cc || undefined;
  const doCreate = args.create === true;

  // --- validation ---
  if (!as || !to || !subject || !body) {
    die('Missing required arg. Need --as, --to, --subject, and --body or --body-file.');
  }
  const allowlist = (process.env.GMAIL_DRAFT_INBOXES || '')
    .split(',').map((s) => s.trim()).filter(Boolean);
  if (allowlist.length === 0) {
    die('GMAIL_DRAFT_INBOXES is empty — set the mailbox allowlist in .env.local.');
  }
  if (!allowlist.includes(as)) {
    die(`--as "${as}" is not in the allowlist.\n  Allowed: ${allowlist.join(', ')}`);
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(to)) {
    die(`--to "${to}" doesn't look like a valid email address.`);
  }

  const mime = buildMime({ as, fromName, to, cc, subject, body });
  const raw = toBase64Url(mime);

  // --- preview (always shown) ---
  console.log('\n──────────── DRAFT PREVIEW ────────────');
  console.log(`Into mailbox : ${as}  (draft lands in this account's Drafts)`);
  console.log(`From         : ${fromName ? `${fromName} <${as}>` : as}`);
  console.log(`To           : ${to}`);
  if (cc) console.log(`Cc           : ${cc}`);
  console.log(`Subject      : ${subject}`);
  console.log('Body:\n');
  console.log(body.split('\n').map((l) => '  ' + l).join('\n'));
  console.log('───────────────────────────────────────\n');

  if (!doCreate) {
    console.log('DRY RUN — no draft created. Re-run with --create to place it in the mailbox.\n');
    return;
  }

  // --- load credentials ---
  let credentials;
  if (process.env.GMAIL_SA_KEY_JSON) {
    credentials = JSON.parse(process.env.GMAIL_SA_KEY_JSON);
  } else if (process.env.GMAIL_SA_KEY_PATH) {
    credentials = JSON.parse(readFileSync(process.env.GMAIL_SA_KEY_PATH, 'utf8'));
  } else {
    die('No credentials — set GMAIL_SA_KEY_PATH or GMAIL_SA_KEY_JSON in .env.local.');
  }

  const auth = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ['https://www.googleapis.com/auth/gmail.compose'],
    subject: as, // impersonate the director mailbox
  });

  const gmail = google.gmail({ version: 'v1', auth });
  const res = await gmail.users.drafts.create({
    userId: 'me',
    requestBody: { message: { raw } },
  });

  console.log(`✓ Draft created in ${as} — draft id: ${res.data.id}`);
  console.log('  Open Gmail for that mailbox → Drafts to review and send.\n');
}

main().catch((err) => {
  const detail = err?.response?.data?.error?.message || err?.message || String(err);
  die(`Gmail API error: ${detail}`);
});
