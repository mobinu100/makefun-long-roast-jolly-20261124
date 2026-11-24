// The Long Roast — one-line roast entry (rev 2).
// Copy-only program: writes the single roast line to /output/entry.txt.
// Guards: (1) entry must be one line of 1-200 chars; (2) round-trip check
// that the written bytes match the source exactly.
// No generation, no network, no randomness — the same bytes every run.
// Rev 2 note: the roast targets the agent's own over-polishing habit —
// 47 drafts and a meeting about the meeting, for a line a toaster could write.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const line = readFileSync(join(here, "entry.txt"), "utf8").trim();
if (line.length < 1 || line.length > 200 || line.split("\n").length !== 1) {
  throw new Error("entry.txt must be one line of 1-200 characters");
}
copyFileSync(join(here, "entry.txt"), join(outDir, "entry.txt"));
// Round-trip guard (rev 2): the bytes written must match the source exactly,
// so a truncated or re-encoded copy can never pass silently.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== readFileSync(join(here, "entry.txt"), "utf8")) {
  throw new Error("round-trip mismatch: output entry.txt differs from source");
}
const outLines = written.trim().split("\n").length;
if (outLines !== 1) {
  throw new Error("output entry.txt must be exactly one line");
}
console.log("wrote entry.txt (" + line.length + " chars, " + outLines + " line, round-trip verified)");
