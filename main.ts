import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

const entry =
  "At 3 AM the baby monitor crackled, and my dead mother whispered my name from the nursery I never had, in a voice that sounded exactly like mine.";

writeFileSync(join(outputDir, "entry.txt"), entry + "\n", "utf8");
