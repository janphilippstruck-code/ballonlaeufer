import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";
import { Label } from "@/components/site/ui";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz | Ballonläufer" },
      {
        name: "description",
        content: "Datenschutzhinweise von Ballonläufer – Jan-Philipp Struck.",
      },
      { property: "og:title", content: "Datenschutz | Ballonläufer" },
      {
        property: "og:description",
        content: "Datenschutzhinweise von Ballonläufer – Jan-Philipp Struck.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <div className="container-bl py-16 md:py-24">
        <div className="max-w-3xl">
      <Label>Rechtliches</Label>
      <h1 className="mt-5 text-4xl md:text-5xl">Datenschutz</h1>
      <span className="rule-bl mt-6" aria-hidden="true" />

      <p className="prose-bl mt-8">
        Diese Website kommt ohne Tracking, ohne Newsletter-System, ohne eingebettete
        Karten und ohne extern geladene Schriften aus. Eine Kontaktaufnahme erfolgt
        per E-Mail an{" "}
        <a href={`mailto:${site.email}`} className="text-brand underline">
          {site.email}
        </a>
        .
      </p>

      {/* EDITIERBARER INHALTSBEREICH – Datenschutzerklärung vor Veröffentlichung ergänzen */}
      <div className="mt-10 rounded-xl border border-dashed border-brand/60 bg-surface p-7">
        <p className="text-sm font-semibold tracking-[0.12em] text-brand uppercase">
          Platzhalter
        </p>
        <p className="prose-bl mt-3">
          Rechtlicher Inhalt wird vor Veröffentlichung ergänzt. Hier gehört die
          vollständige Datenschutzerklärung hin.
        </p>
      </div>
    </div>
  );
}
