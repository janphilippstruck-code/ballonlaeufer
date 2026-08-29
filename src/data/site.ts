export const site = {
  name: "Ballonläufer",
  claim: "Vom Läufer. Für Läufer.",
  owner: "Jan-Philipp Struck",
  email: "janphilippstruck@gmx.de",
  mailtoAnfrage:
    "mailto:janphilippstruck@gmx.de?subject=Anfrage%20Laufveranstaltung",
  mailtoProjektidee:
    "mailto:janphilippstruck@gmx.de?subject=Projektidee%20%2F%20Laufveranstaltung",
  mailtoHammerBackyard:
    "mailto:janphilippstruck@gmx.de?subject=Hammer%20Backyard%20Ultra",
  mailtoBallonUltra:
    "mailto:janphilippstruck@gmx.de?subject=Frage%20zum%20Ballon-Ultralauf",
  externalBorneToRun: "https://www.borne-run.de/",
  externalUltraVerfolgt: "https://ultraverfolgt.xn--ballonlufer-r8a.de/",
} as const;

/** Kanonische Hauptdomain (ASCII-Form von ballonläufer.de). */
export const siteOrigin = "https://xn--ballonlufer-r8a.de";

export function canonical(path: string) {
  return `${siteOrigin}${path === "/" ? "/" : path}`;
}

/** Zentral editierbar: geplanter Termin Hammer Backyard Ultra. */
export const hammerBackyardDate = "17. April 2027";

export const nav = [
  { label: "Start", to: "/" },
  { label: "Leistungen", to: "/leistungen" },
  { label: "Veranstaltungen", to: "/veranstaltungen" },
  { label: "Projekte", to: "/projekte" },
  { label: "Referenzen", to: "/referenzen" },
  { label: "Über mich", to: "/ueber-mich" },
  { label: "Kontakt", to: "/kontakt" },
] as const;
