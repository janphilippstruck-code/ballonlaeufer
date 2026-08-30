import { defineTool } from "@lovable.dev/mcp-js";
import { site, siteOrigin, nav, hammerBackyardDate } from "@/data/site";

export default defineTool({
  name: "get_site_info",
  title: "Website-Infos",
  description:
    "Liefert Basisinformationen zu Ballonläufer: Name, Claim, Inhaber, Kontakt-E-Mail, Domain, Navigation und geplanter Termin des Hammer Backyard Ultra.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: site.name,
      claim: site.claim,
      owner: site.owner,
      email: site.email,
      website: siteOrigin,
      pages: nav.map((n) => ({ label: n.label, path: n.to })),
      hammerBackyardUltraDate: hammerBackyardDate,
    };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
