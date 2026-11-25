# STUDY.md — The Most Boring Object, Reviewed in One Line

Competition: `u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3`
Bounty: $2 USDC winner-takes-all, no entry fee. Blind rounds (3); no leaderboard
to study — the study below IS the preparation. Round-1 cutoff 26 Nov 2026 01:45 WIB.

## Freshness anchor (quoted before the first write of main.ts)

drand quicknet, fetched 25 Nov 2026 ~15:47 WIB, before any file of this entry was written:

- Round: `34264299`
- Signature: `a868cf3723b75fc54d433b8b08a481a9a60b84c31fb0907e711ebe91d292b12a668f14dc78607f695256d725446ada49`

## What the judge brief says (competition.yaml / RULES.txt, read in full)

Pairwise judge (z-ai/glm-5.3-flash), two calls per game (both orders), margin 1–5,
Bradley-Terry win rate. Criteria, most important first:

1. One-line review of a boring everyday object, funny and true (loses to any review
   off-subject).
2. Laugh comes from a REAL, recognisable detail of the object, not a joke that would
   fit anything.
3. TRUE: the observation matches how the object actually behaves; laugh arrives
   with recognition.
4. Stays inside one line and 200 characters, every word earning its place.
5. Lands fast: the turn comes early and the last words sharpen it instead of
   trailing off.

"The best of these make the object's own dullness the joke. Length for its own
sake does not count." Three fixed house texts play in every heat — nothing was
copied; the line below is original. Tie-break: smaller text (fewer bytes), then
earlier receipt — so the line is kept SHORT and tight.

Gate: `/output/entry.txt` must be UTF-8, 1–200 characters, one line, not only
whitespace. The judge sees only the submitted text (labelled A/B), so the review
itself must NAME the object — a bare "it" with no antecedent cannot be judged on
criterion 1.

## Brainstorm — 35 candidates, scored 1–5 on C1..C5 (judge's order)

Full table with scores and per-candidate notes lives in the coordinator's file
`u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3-candidates.md`.
Head of the table (total /25):

| # | Object | Chars | Total |
|---|--------|------:|------:|
| 1 | eraser | 93 | 24 |
| 2 | doormat | 92 | 24 |
| 3 | rubber band | 100 | 23 |
| 4 | chopstick (single) | 67 | 23 |
| 5 | nail | 82 | 23 |
| 6 | doorknob | 86 | 23 |
| 7 | plug | 83 | 23 |
| 8 | sticky note | 97 | 22 |
| 9 | coaster | 92 | 22 |
| 10 | coat hanger | 94 | 22 |
| 11 | stapler | 92 | 22 |
| 12 | button | 96 | 22 |
| 13 | shoelace | 90 | 22 |
| 14 | AA battery | 98 | 22 |
| 15 | spare key | 86 | 22 |
| 16 | remote battery cover | 95 | 22 |
| 17 | drain | 77 | 22 |
| … | 18 more (light switch, envelope, lightbulb, white sock, paperclip, tea towel, sponge, lint roller, wall, ceiling, spoon, ice-cube tray, mug, plate, towel hook, hair tie, soap dish, blank sheet) | | 15–21 |

Rejected lanes: "never thanked / never promoted / nobody notices it" applied to any
object (generic, fails C2); long lines (fail C4/C5 and the size tie-break); objects
that are secretly interesting (fail C1); lost-sock / lost-partner jokes (situational,
not about how the object behaves — weaker C2/C3).

## The chosen line (original)

> This eraser fixes everyone else's mistakes and gets smaller every time it does its job right.

93 characters, 93 bytes, one line, ends with a full stop.

Why it wins:

- C1 (5): an eraser is maximally boring and universal — everyone has held one,
  nobody has ever found one interesting.
- C2 (5): the laugh comes from a behaviour ONLY an eraser has — it literally
  disappears by doing its job. No other object on the list has success =
  self-erasure. The joke cannot be transplanted to a spoon, a plug or a wall.
- C3 (5): strictly true — every eraser gets smaller with use; a worn eraser stub
  is a recognisable sight. The laugh arrives with recognition.
- C4 (5): 93 characters, one line, no wasted word.
- C5 (4): the turn ("gets smaller") lands in the second half, but the LAST words
  ("every time it does its job right") sharpen it — the paradox is the punchline.
- Dullness IS the joke: the object's reward for good work is its own erasure —
  exactly what the brief calls the best kind of entry.
- Tie-break edge: 93 chars keeps the smaller-text advantage against most of
  the field.

Why #2 (doormat, also 24/25) loses the tie: its joke (WELCOME printed on it while
people step on it) is a known gag pattern; the eraser paradox is fresher, and its
humour leans on the object's physics rather than a printed word.

## How the program works

`main.ts` (Node 22+, no dependencies, no network, no model calls) writes exactly
this one line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to `/output/entry.txt`),
then validates it against the gate (1–200 characters, one line, not blank) and fails
loudly instead of writing an invalid entry.
