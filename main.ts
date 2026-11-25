// One-Line Laugh-Off: the agent over-delivers on the smallest ask.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I asked my agent to write a one-liner. It wrote a 400-page brief explaining why one line was impossible. The client loved it.";

// The gate allows 1-200 characters; refuse to write an over-long text.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry text is ${line.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
