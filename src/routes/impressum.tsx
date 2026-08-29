import { createFileRoute } from "@tanstack/react-router";
import { site, canonical } from "@/data/site";
import { Label } from "@/components/site/ui";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | Ballonläufer" },
      {
        name: "description",
        content: "Impressum von Ballonläufer – Jan-Philipp Struck, Hamm.",
      },
      { property: "og:title", content: "Impressum | Ballonläufer" },
      {
        property: "og:description",
        content: "Impressum von Ballonläufer – Jan-Philipp Struck, Hamm.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: canonical("/impressum") }],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="container-bl py-14 md:py-24">
      <div className="max-w-3xl">
        <Label>Rechtliches</Label>
        <h1 className="mt-5 text-4xl md:text-5xl">Impressum</h1>
        <span className="rule-bl mt-6" aria-hidden="true" />

        <section className="mt-10">
          <h2 className="text-xl font-bold">Angaben gemäß § 5 DDG</h2>
          <address className="mt-4 space-y-1 not-italic text-muted-foreground">
            <p className="font-semibold text-foreground">Jan-Philipp Struck</p>
            <p>Ballonläufer</p>
            <p>Brüggenkampstr. 10</p>
            <p>59077 Hamm</p>
            <p>Deutschland</p>
          </address>
          <p className="mt-4">
            E-Mail:{" "}
            <a href={`mailto:${site.email}`} className="text-brand underline">
              {site.email}
            </a>
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Verantwortlich für den Inhalt</h2>
          <p className="prose-bl mt-4">
            Jan-Philipp Struck
            <br />
            Anschrift wie oben
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Verbraucherstreitbeilegung</h2>
          <p className="prose-bl mt-4">
            Ich bin weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </div>
  );
}
