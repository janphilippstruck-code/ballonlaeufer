import { defineMcp } from "@lovable.dev/mcp-js";
import getSiteInfoTool from "./tools/get-site-info";
import listProjectsTool from "./tools/list-projects";
import listReferencesTool from "./tools/list-references";
import getChronicleTool from "./tools/get-chronicle";

export default defineMcp({
  name: "ballonlaufer",
  title: "Ballonläufer",
  version: "0.1.0",
  instructions:
    "Öffentliche Tools rund um Ballonläufer (Jan-Philipp Struck): Zeitmessung, Moderation und Laufveranstaltungen. `get_site_info` liefert Basisdaten und Kontakt, `list_projects` die Laufprojekte, `list_references` die betreuten Veranstaltungen, `get_chronicle` die Jahres-Chronik.",
  tools: [getSiteInfoTool, listProjectsTool, listReferencesTool, getChronicleTool],
});
