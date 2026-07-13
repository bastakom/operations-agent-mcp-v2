import { createMcpHandler } from "mcp-handler";

console.log("🚀 route.ts loaded");

const handler = createMcpHandler(
  (server) => {
    console.log("🚀 MCP handler initialized");

    server.registerTool(
      "health_check",
      {
        title: "Health Check",
        description: "Checks that the MCP server is alive.",
        inputSchema: {},
      },
      async () => {
        console.log("✅ health_check tool called");

        return {
          content: [
            {
              type: "text",
              text: "MCP server is alive 🚀",
            },
          ],
        };
      }
    );
  },
  {},
  {
    basePath: "/api",
    verboseLogs: true,
    maxDuration: 60,
  }
);

export { handler as GET, handler as POST };
