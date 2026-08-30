import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { chronicle } from "@/data/events";

export default defineTool({
  name: "get_chronicle",
  title: "Chronik der Veranstaltungen",
  description:
    "Gibt die Jahres-Chronik der Ballonläufer-Veranstaltungen zurück – von den ersten Ballon-Ultraläufen bis zu den geplanten Formaten.",
  inputSchema: {},
  outputSchema: {
    chronicle: z.array(z.object({ year: z.string(), text: z.string() })),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = chronicle.map((entry) => ({ year: entry.year, text: entry.text }));
    return {
      content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }],
      structuredContent: { chronicle: items },
    };
  },
});
