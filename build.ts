import isolatedDeclarations from "bun-plugin-isolated-decl";
await Bun.build({
  entrypoints: ["src/index.ts", "src/adapters/mcp.ts"],
  plugins: [isolatedDeclarations()],
  outdir: "./dist",
  target: "node",
  format: "esm",
});
