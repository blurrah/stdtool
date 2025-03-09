import type { StandardSchemaV1 } from "@standard-schema/spec";
import type { Tool } from "../types";

/**
 * Convert a tool to the MCP server format
 * @returns
 */
export function mcp<
  Params extends StandardSchemaV1 | undefined = undefined | StandardSchemaV1
>(
  input: Tool<Params>
): [string, string, Params, (parameters: Params) => Promise<unknown>] {
  return [input.name, input.description, input.parameters, input.execute];
}
