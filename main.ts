// make.fun entry: news-image-20261120.
//
// The infographic for Friday 20 November 2026 is pre-rendered and kept
// in this folder as entry.png. This program's only job is to place a copy
// of it at $MAKEFUN_OUTPUT_DIR/entry.png ("/output" when the variable is
// unset). It uses synchronous calls from the Node standard library only,
// opens no network connection, and never deletes anything.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const sourceDir = dirname(fileURLToPath(import.meta.url));
const destinationDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// The judge reads exactly this file, so the name is fixed.
const outputFile = join(destinationDir, "entry.png");

mkdirSync(destinationDir, { recursive: true });
copyFileSync(join(sourceDir, "entry.png"), outputFile);
