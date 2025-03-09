import type { StandardSchemaV1 } from "@standard-schema/spec";
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
export function mcp<
  Params extends StandardSchemaV1 | undefined = undefined | StandardSchemaV1
>(
  input: Tool<Params>
): [
  string,
  string | undefined,
  Params,
  (parameters: Params) => Promise<unknown>
] {
  return [input.name, input.description, input.parameters, input.execute];
}
