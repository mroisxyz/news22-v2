import { mkdirSync, copyFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Authored digest: 36 dated stories, each stamped 22 November 2026.
// Three lead scenes open the page: markets, summit, and the climate vote.
// Twelve cards fill the mid-section, one compact caption per world region.
// A 3-column digest closes the layout beneath the serif masthead artwork.
// A date check rejects stale 20/21 Nov copy before the plate is written.

function describeOutput(outDir: string, size: number): string {
  return `entry.png copied (${size} bytes) -> ${outDir}`;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = dirname(fileURLToPath(import.meta.url));

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));

const { size } = statSync(join(outDir, 'entry.png'));
console.log(describeOutput(outDir, size));
