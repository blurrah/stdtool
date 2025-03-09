import isolatedDeclarations from "bun-plugin-isolated-decl";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

// Get all TS files in the adapters directory
const adapterFiles = (await readdir("src/adapters"))
  .filter((file) => file.endsWith(".ts"))
  .map((file) => join("src/adapters", file));

await Bun.build({
  entrypoints: ["src/index.ts", ...adapterFiles],
  plugins: [isolatedDeclarations()],
  outdir: "./dist",
  target: "node",
  format: "esm",
});
