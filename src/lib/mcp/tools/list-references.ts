import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { recurringReferences } from "@/data/references";

export default defineTool({
  name: "list_references",
  title: "Referenzen auflisten",
  description:
    "Listet die wiederkehrenden Veranstaltungen, die Ballonläufer betreut, jeweils mit Leistungsumfang und Startjahr.",
  inputSchema: {},
  outputSchema: {
    references: z.array(
      z.object({
        name: z.string(),
        scope: z.array(z.string()),
        since: z.string().nullable(),
      }),
    ),
  },
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
