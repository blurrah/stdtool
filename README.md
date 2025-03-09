# stdtool

Stdtool is the easiest way to create reusable tools that can be output to be used by multiple tool calling frameworks such as AI SDK, MCP servers, Langchain.

## Install

```bash
# npm
npm i stdtool

# yarn
yarn add stdtool

# pnpm
pnpm add stdtool

# bun
bun add stdtool
```

## Usage

Create a reusable tool using the `tool()` function:

```ts
const myTool = tool({
  name: "My tool",
  description: "My custom tool",
  parameters: z.object({}),
  execute: async () => {
    return "Hello world";
  }
})
```

Then you can use any of the adapters to generate a specific tool for your usecase, e.g. MCP server:

```ts
import { mcp } from "tools/adapters/mcp";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

const server = new McpServer({
  name: "My server"
});

server.tool(...mcp(myTool))
```

