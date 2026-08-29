import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { hammerBackyardDate, site, canonical } from "@/data/site";
import {
  ActionLink,
  BulletList,
  Figure,
  Section,
  SectionHead,
  StatusBadge,
} from "@/components/site/ui";

export const Route = createFileRoute("/projekte/hammer-backyard-ultra")({
  head: () => ({
    meta: [
      { title: "Hammer Backyard Ultra | Ballonläufer" },
      {
        name: "description",
        content:
          "Hammer Backyard Ultra: 6,706 Kilometer jede Stunde, Basecamp und Open End. Ein Projekt von Ballonläufer, in Planung für 2027.",
      },
      { property: "og:title", content: "Hammer Backyard Ultra | Ballonläufer" },
      {
        property: "og:description",
        content:
          "Stunde für Stunde. Runde für Runde. Der Backyard Ultra für Hamm – in Planung für 2027.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonical("/projekte/hammer-backyard-ultra") }],
  }),
  component: HammerBackyardPage,
});

function HammerBackyardPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-bl grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <StatusBadge>In Planung · 2027</StatusBadge>
            <h1 className="mt-5 text-4xl leading-tight md:text-5xl lg:text-[3.4rem]">
              Hammer Backyard Ultra
            </h1>
            <p className="mt-4 text-xl font-semibold text-brand">
              Stunde für Stunde. Runde für Runde.
            </p>
            <span className="rule-bl mt-6" aria-hidden="true" />
            <p className="prose-bl mt-6">
              Der Backyard ist eines dieser Formate, die auf dem Papier vollkommen
              simpel wirken: 6,706 Kilometer innerhalb einer Stunde. Danach geht es
              wieder los. Und wieder. Bis nur noch ein Läufer übrig ist.
            </p>
            <p className="prose-bl mt-4">
              Für Hamm entsteht daraus aktuell ein eigener Backyard Ultra – mit
              Basecamp, Rundkurs und Open-End-Charakter.
            </p>
          </div>
          <Figure
            src={img.hammerBackyardLogo}
            alt="Logo des Hammer Backyard Ultra"
            className="aspect-[4/3] bg-background"
            imgClassName="object-contain p-10"
            priority
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead title="Das Prinzip" />
            <BulletList
              items={[
                "klassisches Backyard-Prinzip",
                "6,706 km je Runde",
                "Start jeder neuen Runde zur vollen Stunde",
                "Hamm",
                "Basecamp",
                "Open End",
              ]}
            />
          </div>
          <div className="rounded-xl border border-border p-7">
            <h2 className="text-xl font-bold">Stand der Planung</h2>
            <p className="prose-bl mt-4">
              Diese Seite ist zunächst eine Projekt- und Infoseite, noch keine
              vollständige Ausschreibung. Details zu Ablauf und Teilnahme folgen,
              sobald sie feststehen.
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-t border-border pt-3">
                <dt className="text-muted-foreground">Status</dt>
                <dd className="font-semibold">In Planung für 2027</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-border pt-3">
                <dt className="text-muted-foreground">Geplanter Termin</dt>
                <dd className="font-semibold">{hammerBackyardDate}</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-border pt-3">
                <dt className="text-muted-foreground">Ort</dt>
                <dd className="font-semibold">Hamm</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <Section tone="brand">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Interesse oder Frage zum Projekt?</h2>
          <p className="mt-6 text-lg leading-relaxed">
            Schreib mir gern eine kurze Mail – auch wenn du einfach nur wissen
            möchtest, wie es mit dem Hammer Backyard Ultra weitergeht.
          </p>
          <div className="mt-8">
            <ActionLink href={site.mailtoHammerBackyard} variant="onBrand">
              Interesse / Frage zum Projekt
            </ActionLink>
          </div>
        </div>
      </Section>
    </>
  );
}
