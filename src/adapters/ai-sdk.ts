import type { Tool as AiSdkTool } from "ai";
import type { Tool } from "../types";

/**
 * Create an AI SDK tool from a tool
 * @param tool - The tool to convert
 * @returns An AI SDK tool
 */
function createAiSdkTool(tool: Tool): AiSdkTool {
  return {
    description: tool.description,
    parameters: tool.parameters,
    execute: tool.execute,
  };
}

/**
 * Convert a tool to an AI SDK tool
 * @param tool - The tool to convert
 * @returns An AI SDK tool
 *
 * @example
 * ```ts
 * const myTool = tool({
 *   name: "my-tool",
 *   description: "my tool",
 *   parameters: {},
 *   execute: async () => {}
 * });
 *
 * const bla = generateText({
 *   model: openai("gpt-4o"),
 *   prompt: "Hello, world!",
 *   tools: { ...aiSdk(myTool) },
 * });
 */
export function aiSdk(tool: Tool): { [x: string]: AiSdkTool } {
  return {
    [tool.name]: createAiSdkTool(tool),
  };
}

/**
 * Convert an array of tools to an object of tools to be added to the AI SDK
 * It will use the tool name as the key
 * @param tools - The tools to convert
 * @returns An object of tools
 *
 * @example
 * ```ts
 * const myTool = tool({
 *   name: "my-tool",
 *   description: "my tool",
 *   parameters: {},
 *   execute: async () => {}
 * });
 *
 * const bla = generateText({
 *   model: openai("gpt-4o"),
 *   prompt: "Hello, world!",
 *   tools: { ...aiSdkTools([myTool]) },
 * });
 */
export function aiSdkTools(tools: Array<Tool>): Record<string, AiSdkTool> {
  return tools.reduce<Record<string, AiSdkTool>>((acc, tool) => {
    acc[tool.name] = createAiSdkTool(tool);
    return acc;
  }, {});
}
