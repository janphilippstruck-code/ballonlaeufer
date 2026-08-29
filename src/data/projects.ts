import { img } from "@/lib/images";

export type ProjectStatus =
  | "IDEE"
  | "IN PLANUNG"
  | "PILOTPROJEKT"
  | "AKTIV"
  | "ABGESCHLOSSEN";

export type Project = {
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string[];
  category: string;
  status: ProjectStatus;
  year: string;
  image: string;
  imageAlt: string;
  imageIsLogo?: boolean;
  facts: string[];
  href: string;
  linkLabel: string;
  external: boolean;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Ultra verfolgt",
    slug: "ultra-verfolgt",
    shortDescription: "Gejagt bis ins Ziel.",
    longDescription: [
      "Mehrere Läuferteams versuchen, über viele Kilometer ihr Ziel zu erreichen. Gleichzeitig sucht ein gegnerisches Team nach ihnen – mit Fahrzeug, Fahrrädern, mobilen Läufern, Standortinformationen und einer ganzen Menge Taktik.",
      "Aus dem Lauf soll gleichzeitig ein filmisches Format entstehen. Actioncams, Standortdaten und Aufnahmen der verschiedenen Teams sollen später die Geschichte des Tages erzählen.",
    ],
    category: "Laufformat & Film",
    status: "PILOTPROJEKT",
    year: "2026",
    image: img.ultraVerfolgtLogoKorrekt,
    imageAlt: "Logo des Laufprojekts Ultra verfolgt",
    imageIsLogo: true,
    facts: ["Laufen", "Taktik", "Verfolgung", "Film"],
    href: "https://ultraverfolgt.xn--ballonlufer-r8a.de/",
    linkLabel: "Ultra verfolgt entdecken ↗",
    external: true,
    featured: true,
  },
  {
    title: "Ballon-Ultralauf Welver – die Rückkehr",
    slug: "ballon-ultralauf",
    shortDescription: "Zurück zu den Wurzeln.",
    longDescription: [
      "Mit dem Ballon-Ultralauf in Welver hat 2018 meine Geschichte als Veranstalter angefangen. Nach mehreren Jahren Pause soll das Format zurückkommen – diesmal mit all der Erfahrung, Technik und Organisation, die seit dem ersten Lauf dazugekommen sind.",
      "Die Grundidee soll dabei bleiben: ein familiärer Ultralauf, bei dem das gemeinsame Laufen wichtiger ist als möglichst viel Eventshow.",
    ],
    category: "Ultralauf",
    status: "IN PLANUNG",
    year: "2027",
    image: img.ballonUltraWelverLogo,
    imageAlt: "Vorläufiges Logo des Ballon-Ultralaufs Welver",
    imageIsLogo: true,
    facts: ["Ultralauf", "Rundkurs", "familiäres Format", "2027"],
    href: "/projekte/ballon-ultralauf",
    linkLabel: "Mehr erfahren →",
    external: false,
    featured: true,
  },
  {
    title: "Hammer Backyard Ultra",
    slug: "hammer-backyard-ultra",
    shortDescription: "Stunde für Stunde. Runde für Runde.",
    longDescription: [
      "Der Backyard ist eines dieser Formate, die auf dem Papier vollkommen simpel wirken: 6,706 Kilometer innerhalb einer Stunde. Danach geht es wieder los. Und wieder. Bis nur noch ein Läufer übrig ist.",
      "Für Hamm entsteht daraus aktuell ein eigener Backyard Ultra – mit Basecamp, Rundkurs und Open-End-Charakter.",
    ],
    category: "Backyard Ultra",
    status: "IN PLANUNG",
    year: "2027",
    image: img.hammerBackyardLogo,
    imageAlt: "Logo des Hammer Backyard Ultra",
    imageIsLogo: true,
    facts: ["6,706 km", "jede Stunde", "Hamm", "Open End"],
    href: "/projekte/hammer-backyard-ultra",
    linkLabel: "Hammer Backyard Ultra →",
    external: false,
    featured: true,
  },
];

/** Platz für spätere abgeschlossene Projekte – bewusst noch leer. */
export const pastProjects: Project[] = [];
