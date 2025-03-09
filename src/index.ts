import type { z } from "zod";
import type { Tool } from "./types";

/**
 * Create a reusable tool from a function
 * @param input Tool input
 * @returns
 */
export function tool<Params extends z.ZodTypeAny>(
  input: Tool<Params>
): Tool<Params> {
  return input;
}
