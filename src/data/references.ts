export type Reference = {
  name: string;
  scope: string[];
  since?: string;
};

export const recurringReferences: Reference[] = [
  { name: "Osnabrücker 6-Stunden-Lauf", scope: ["Zeitmessung"], since: "2019" },
  { name: "6-Stunden-Lauf Bönen", scope: ["Zeitmessung"], since: "2019" },
  {
    name: "10-km-Lauf am Förderturm",
    scope: ["Zeitmessung", "Musik", "Moderation"],
    since: "2020",
  },
  {
    name: "Oppa’s Gartenmarathon",
    scope: ["Zeitmessung", "Musik"],
    since: "2020",
  },
  {
    name: "BORNE TO RUN",
    scope: ["Mitorganisation", "Zeitmessung", "Moderation", "Musik"],
    since: "2023",
  },
  { name: "FREETRAIL", scope: ["Zeitmessung", "Musik"], since: "2024" },
  {
    name: "Halener Bahnmarathon",
    scope: ["Zeitmessung", "Musik", "teilweise Moderation"],
    since: "2025",
  },
];
