import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist");
const files = [
  "index.html", "recipes.html", "demo.html", "styles.css", "catalog.css",
  "app.js", "favicon.svg", "favicon.ico", "robots.txt", "sitemap.xml",
  "e443fa1683b91bade13543d59f4e9983.txt",
  "assets", "demos", "recipes", "skill",
];

await mkdir(output, { recursive: true });
for (const file of files) {
  await cp(path.join(root, file), path.join(output, file), { recursive: true, force: true });
}

let homepage = await readFile(path.join(root, "index.html"), "utf8");
const replacements = [
  ['<link rel="stylesheet" href="styles.css">', `<style>${await readFile(path.join(root, "styles.css"), "utf8")}</style>`],
  ['<link rel="stylesheet" href="catalog.css" media="print" onload="this.media=\'all\'">\n  <noscript><link rel="stylesheet" href="catalog.css"></noscript>', `<style>${await readFile(path.join(root, "catalog.css"), "utf8")}</style>`],
  ['<script src="app.js" async></script>', `<script>${await readFile(path.join(root, "app.js"), "utf8")}</script>`],
];

for (const [marker, content] of replacements) {
  if (!homepage.includes(marker)) throw new Error(`Homepage marker missing: ${marker}`);
  homepage = homepage.replace(marker, content);
}

await writeFile(path.join(output, "index.html"), homepage);
console.log(`Built ${path.join(output, "index.html")}`);
