import type { z } from "zod";
import type { Tool } from "../types";

/**
 * Convert a tool to the MCP simple server format
 * @returns An array of arguments you can pass directly to `server.tool()`
 *
 * @example
 * ```ts
 * import { tool } from "tools";
 * import { mcp } from "tools/adapters/mcp";
 *
 * const myTool = tool({
 *   name: "my-tool",
 *   description: "my tool",
 *   parameters: {},
 *   execute: async () => {}
 * });
 *
 * server.tool(...mcp(myTool));
 * ```
 */
export function mcp<Params extends z.ZodTypeAny>(
  input: Tool<Params>
): [
  Tool<Params>["name"],
  Tool<Params>["description"],
  Tool<Params>["parameters"],
  Tool<Params>["execute"]
] {
  return [input.name, input.description, input.parameters, input.execute];
}
