// Snapshot the "currently reading" list from the CrossPoint / KOSync server
// into lib/reading-data.json, which the site bakes into static HTML at build.
//
// Auth: KOSYNC_USER + KOSYNC_KEY (the lowercase 32-hex MD5 of the sync
// password, exactly what KOReader sends as x-auth-key). The plain password
// is never needed here.
//
// Run: KOSYNC_USER=... KOSYNC_KEY=... node scripts/fetch-reading.mjs
//
// On any failure it leaves the existing snapshot untouched (exit 0) so a bad
// fetch just means slightly stale data, never a broken build or empty section.

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const SERVER = process.env.KOSYNC_SERVER || 'https://sync.crosspointreader.com';
const USER = process.env.KOSYNC_USER;
const KEY = process.env.KOSYNC_KEY;

// A book counts as "currently reading" if it's meaningfully started but not
// finished, and has metadata (title) so we have something to display.
const MIN_PCT = 0.005; // > 0.5% — skip barely-opened books
const MAX_PCT = 0.97;  // < 97%  — treat the tail end as finished
const MAX_BOOKS = 3;

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'lib', 'reading-data.json');

function bail(msg) {
  console.error(`[fetch-reading] ${msg} — keeping existing snapshot.`);
  process.exit(0); // deliberately non-fatal
}

if (!USER || !KEY) bail('KOSYNC_USER / KOSYNC_KEY not set');

const res = await fetch(`${SERVER}/api/v1/progress?limit=200`, {
  headers: { 'x-auth-user': USER, 'x-auth-key': KEY },
}).catch((e) => bail(`request failed: ${e.message}`));

if (!res || !res.ok) bail(`server returned ${res ? res.status : 'no response'}`);

const data = await res.json().catch(() => null);
if (!data || !Array.isArray(data.items)) bail('unexpected response shape');

const books = data.items
  .filter((it) => it.title && it.percentage > MIN_PCT && it.percentage < MAX_PCT)
  .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0))
  .slice(0, MAX_BOOKS)
  .map((it) => ({
    title: it.title,
    author: it.author || null,
    percentage: Math.round(it.percentage * 1000) / 1000,
    lastReadAt: it.timestamp || null,
  }));

const snapshot = { updatedAt: Math.floor(Date.now() / 1000), books };
writeFileSync(OUT, JSON.stringify(snapshot, null, 2) + '\n');
console.log(`[fetch-reading] wrote ${books.length} book(s) to lib/reading-data.json`);
