import { defineTool } from "@lovable.dev/mcp-js";
import { recurringReferences } from "@/data/references";

export default defineTool({
  name: "list_references",
  title: "Referenzen auflisten",
  description:
    "Listet die wiederkehrenden Veranstaltungen, die Ballonläufer betreut, jeweils mit Leistungsumfang und Startjahr.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = recurringReferences.map((r) => ({
      name: r.name,
      scope: r.scope,
      since: r.since ?? null,
    }));
    return {
      content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }],
      structuredContent: { references: items },
    };
  },
});
