import type { StandardSchemaV1 } from "@standard-schema/spec";
import type { Tool } from "./types";

/**
 * Create a reusable tool from a function
 * @param input Tool input
 * @returns
 */
export function tool<Params extends StandardSchemaV1>(
  input: Tool<Params>
): Tool<Params> {
  return input;
}
