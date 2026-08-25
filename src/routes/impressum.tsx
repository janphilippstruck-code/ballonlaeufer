import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";
import { Label } from "@/components/site/ui";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | Ballonläufer" },
      {
        name: "description",
        content: "Impressum von Ballonläufer – Jan-Philipp Struck.",
      },
      { property: "og:title", content: "Impressum | Ballonläufer" },
      {
        property: "og:description",
        content: "Impressum von Ballonläufer – Jan-Philipp Struck.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="container-bl py-16 md:py-24">
      <div className="max-w-3xl">
        <Label>Rechtliches</Label>
        <h1 className="mt-5 text-4xl md:text-5xl">Impressum</h1>
        <span className="rule-bl mt-6" aria-hidden="true" />

        <div className="mt-10 space-y-4">
          <p className="font-semibold">{site.owner}</p>
          <p>
            E-Mail:{" "}
            <a href={`mailto:${site.email}`} className="text-brand underline">
              {site.email}
            </a>
          </p>
        </div>

        {/* EDITIERBARER INHALTSBEREICH – rechtliche Angaben vor Veröffentlichung ergänzen */}
        <div className="mt-10 rounded-xl border border-dashed border-brand/60 bg-surface p-7">
          <p className="text-sm font-semibold tracking-[0.12em] text-brand uppercase">
            Platzhalter
          </p>
          <p className="prose-bl mt-3">
            Rechtlicher Inhalt wird vor Veröffentlichung ergänzt. Hier gehören unter anderem
            Anschrift, Angaben gemäß § 5 DDG sowie die Verantwortlichkeit für den Inhalt hin.
          </p>
        </div>
      </div>
    </div>
  );
}
