import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "@/data/projects";

export default defineTool({
  name: "list_projects",
  title: "Projekte auflisten",
  description:
    "Listet die öffentlichen Laufprojekte von Ballonläufer (z. B. Ultra verfolgt, Ballon-Ultralauf Welver, Hammer Backyard Ultra) mit Status, Jahr, Kategorie und Beschreibung.",
  inputSchema: {
    slug: z
      .string()
      .trim()
      .optional()
      .describe("Optionaler Slug, um nur ein einzelnes Projekt zurückzugeben."),
  },
  outputSchema: {
    projects: z.array(
      z.object({
        title: z.string(),
        slug: z.string(),
        shortDescription: z.string(),
        description: z.string(),
        category: z.string(),
        status: z.string(),
        year: z.string(),
        facts: z.array(z.string()),
        link: z.string(),
      }),
    ),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const items = projects
      .filter((p) => !slug || p.slug === slug)
      .map((p) => ({
        title: p.title,
        slug: p.slug,
        shortDescription: p.shortDescription,
        description: p.longDescription.join("\n\n"),
        category: p.category,
        status: p.status,
        year: p.year,
        facts: p.facts,
        link: p.href,
      }));

    if (slug && items.length === 0) {
      return {
        content: [{ type: "text" as const, text: `Kein Projekt mit dem Slug "${slug}" gefunden.` }],
        isError: true,
      };
    }

    return {
      content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }],
      structuredContent: { projects: items },
    };
  },
});
