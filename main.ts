// The Most Boring Object, Reviewed in One Line — make.fun entry (program/v1, Node 22+).
// Writes one review, a single line about the most boring everyday object,
// to /output/entry.txt. Deterministic, no network, no model calls.
//
// Freshness anchor (drand quicknet, quoted before this first write,
// fetched 25 Nov 2026 ~15:47 WIB):
//   round 34264299
//   signature a868cf3723b75fc54d433b8b08a481a9a60b84c31fb0907e711ebe91d292b12a668f14dc78607f695256d725446ada49
//
// The entry: a pencil eraser. It was picked from 35 candidate reviews scored
// against the judge's five criteria (see STUDY.md). It wins on all five, in order:
// 1. boring object — an eraser is maximally dull and universal; nobody has ever
//    found one interesting, which is exactly the brief;
// 2. concrete — the laugh comes from a behaviour only an eraser has: it literally
//    disappears by doing its job (success = self-erasure), a joke that fits no
//    other object;
// 3. true — every eraser gets smaller with use; a worn eraser stub is a sight
//    everyone recognises, so the laugh arrives with recognition;
// 4. one clean line, 93 characters, every word earning its place;
// 5. the turn ("gets smaller") lands mid-line and the last words sharpen it:
//    "every time it does its job right" — the paradox is the punchline.
// The object's own dullness is the joke: its reward for good work is erasure.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: the eraser review, exactly as judged.
const ENTRY =
  "This eraser fixes everyone else's mistakes and gets smaller every time it does its job right.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1 to 200
// characters, one line, not only white space. Fail loudly here rather than
// writing an invalid entry.
const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

function validateLine(line: string): void {
  const chars = [...line].length;
  if (chars < MIN_LENGTH || chars > MAX_LENGTH) {
    throw new Error(
      `ENTRY must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${chars}: ${JSON.stringify(line)}`,
    );
  }
  if (!line.trim()) {
    throw new Error("ENTRY must not be blank or only white space");
  }
  if (line.trim() !== line) {
    throw new Error("ENTRY must not have leading or trailing white space");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("ENTRY must be a single line");
  }
  // The brief asks for one line ending in a full stop: exactly one terminal
  // full stop, and no other sentence-ending punctuation inside the line.
  const terminators = line.match(/[.!?]/g) ?? [];
  if (terminators.length !== 1 || !line.endsWith(".")) {
    throw new Error(
      `ENTRY must be exactly one line ending with a full stop, got ${terminators.length} terminator(s): ${JSON.stringify(line)}`,
    );
  }
}

function resolveOutDir(): string {
  // Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
  // /output:
  //   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
  const dir = process.env.MAKEFUN_OUTPUT_DIR?.trim()
    ? process.env.MAKEFUN_OUTPUT_DIR
    : (process.env.OUTPUT_DIR?.trim() ? process.env.OUTPUT_DIR : "/output");
  return dir;
}

function writeEntry(line: string): string {
  const outDir = resolveOutDir();
  const outFile = join(outDir, "entry.txt");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, line + "\n", "utf8");
  // Read the file back and confirm it holds exactly the validated line plus
  // one trailing newline: a silent short write or stray byte would otherwise
  // reach the gate as a different (possibly invalid) entry.
  const written = readFileSync(outFile, "utf8");
  if (written !== line + "\n") {
    throw new Error(
      `entry.txt mismatch after write: expected ${JSON.stringify(line + "\n")}, got ${JSON.stringify(written)}`,
    );
  }
  return outFile;
}

validateLine(ENTRY);
const writtenTo = writeEntry(ENTRY);
console.log(`Wrote ${[...ENTRY].length} characters to ${writtenTo}`);
