import { createFileRoute } from "@tanstack/react-router";
import { site, canonical } from "@/data/site";
import { ActionLink, Label, Section } from "@/components/site/ui";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt | Ballonläufer" },
      {
        name: "description",
        content:
          "Du planst eine Laufveranstaltung? Schreib Jan-Philipp Struck kurz, worum es geht – Zeitmessung, Moderation, Technik oder Organisation.",
      },
      { property: "og:title", content: "Kontakt | Ballonläufer" },
      {
        property: "og:description",
        content:
          "Lass uns über deinen Lauf sprechen – am liebsten kurz und unkompliziert per Mail.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonical("/kontakt") }],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-bl py-16 md:py-24">
          <div className="max-w-3xl">
            <Label>Kontakt</Label>
            <h1 className="mt-5 text-4xl leading-tight md:text-5xl">
              Lass uns über deinen Lauf sprechen.
            </h1>
            <span className="rule-bl mt-6" aria-hidden="true" />
            <p className="prose-bl mt-6">
              Du planst eine Laufveranstaltung und suchst Unterstützung bei Zeitmessung, Moderation,
              Technik oder Organisation? Schreib mir einfach kurz, was du vorhast.
            </p>

            <div className="mt-10 rounded-xl border border-border bg-surface p-7 md:p-9">
              <p className="text-2xl font-extrabold md:text-3xl">{site.owner}</p>
              <a
                href={site.mailtoAnfrage}
                className="mt-2 block text-xl font-semibold text-brand break-words md:text-2xl"
              >
                {site.email}
              </a>
              <div className="mt-7">
                <ActionLink href={site.mailtoAnfrage}>E-Mail schreiben</ActionLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section tone="surface">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl">
            Was ich für eine erste Einschätzung wissen sollte
          </h2>
          <span className="rule-bl mt-5" aria-hidden="true" />
          <ul className="mt-6 flex flex-wrap gap-2">
            {[
              "Veranstaltung",
              "Termin",
              "Ort",
              "ungefähre Teilnehmerzahl",
              "Lauf-/Wettkampfformat",
              "wobei du Unterstützung suchst",
            ].map((i) => (
              <li
                key={i}
                className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground"
              >
                {i}
              </li>
            ))}
          </ul>
          <p className="prose-bl mt-8">
            Du musst noch nicht jedes Detail kennen. Auch wenn deine Veranstaltung erst eine Idee
            ist, können wir darüber sprechen.
          </p>
        </div>
      </Section>
    </>
  );
}
