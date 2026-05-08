import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const inputUrl = process.env.GLINK_OPENAPI_URL ?? "https://glink.so/api/openapi.json?public=1";
const outputPath = resolve("packages/glink-sdk/openapi.json");

const response = await fetch(inputUrl);
if (!response.ok) {
  throw new Error(`Failed to fetch ${inputUrl}: ${response.status}`);
}

const document = await response.json();
delete document.paths?.["/admin/env-vars"];

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(document, null, 2)}\n`);

console.log(`Wrote ${outputPath}`);
