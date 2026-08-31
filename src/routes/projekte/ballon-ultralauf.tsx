import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { site, canonical } from "@/data/site";
import {
  ActionLink,
  Chips,
  Figure,
  Section,
  StatusBadge,
} from "@/components/site/ui";

export const Route = createFileRoute("/projekte/ballon-ultralauf")({
  head: () => ({
    meta: [
      { title: "Ballon-Ultralauf Welver | Ballonläufer" },
      {
        name: "description",
        content:
          "Der Ballon-Ultralauf in Welver kommt zurück: ein familiärer Ultralauf, mit dem 2018 die Veranstaltergeschichte von Ballonläufer begann. In Planung für 2027.",
      },
      {
        property: "og:title",
        content: "Ballon-Ultralauf Welver – die Rückkehr | Ballonläufer",
      },
      {
        property: "og:description",
        content:
          "Zurück zu den Wurzeln – mit der Erfahrung von heute. In Planung für 2027.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex,follow" },
    ],
    links: [{ rel: "canonical", href: "https://ballonultralauf.xn--ballonlufer-r8a.de/" }],
  }),
  component: BallonUltralaufPage,
});

function BallonUltralaufPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-bl grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <StatusBadge>In Planung · 2027</StatusBadge>
            <h1 className="mt-5 text-4xl leading-tight md:text-5xl lg:text-[3.4rem]">
              Der Ballon-Ultralauf Welver kommt zurück.
            </h1>
            <p className="mt-4 text-xl font-semibold text-brand">
              Zurück zu den Wurzeln – mit der Erfahrung von heute.
            </p>
            <span className="rule-bl mt-6" aria-hidden="true" />
            <p className="prose-bl mt-6">
              Mit dem ersten Ballon-Ultralauf in Welver begann 2018 meine Geschichte als
              Veranstalter. Nach mehreren Jahren Pause soll das Format 2027 neu
              aufgelegt werden.
            </p>
            <p className="prose-bl mt-4">
              Die Grundidee bleibt bewusst einfach: ein familiärer Ultralauf,
              gemeinsames Laufen und ein Format, bei dem nicht möglichst viel
              Eventshow im Mittelpunkt steht.
            </p>
            <Chips items={["Ultralauf", "Rundkurs", "familiäres Format", "2027"]} />
          </div>
          <Figure
            src={img.ballonUltraWelverLogo}
            alt="Vorläufiges Logo des Ballon-Ultralaufs Welver"
            className="aspect-[4/3] bg-background"
            imgClassName="object-contain p-8"
            priority
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl">Wo alles angefangen hat</h2>
            <span className="rule-bl mt-5" aria-hidden="true" />
            <p className="prose-bl mt-6">
              2018 wollte ich einfach einmal selbst eine kleine Laufveranstaltung auf
              die Beine stellen. Aus diesem Versuch wurde die Grundlage für alles,
              was Ballonläufer heute ausmacht.
            </p>
            <div className="mt-8">
              <ActionLink to="/veranstaltungen" variant="outline">
                Die Geschichte der Veranstaltungen →
              </ActionLink>
            </div>
          </div>
          <div className="rounded-xl border border-border p-7">
            <h2 className="text-xl font-bold">Stand der Planung</h2>
            <p className="prose-bl mt-4">
              Termin, Ort und Streckendetails werden aktuell abgestimmt und hier
              ergänzt, sobald sie feststehen.
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-t border-border pt-3">
                <dt className="text-muted-foreground">Status</dt>
                <dd className="font-semibold">In Planung · 2027</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-border pt-3">
                <dt className="text-muted-foreground">Format</dt>
                <dd className="font-semibold">familiärer Ultralauf, Rundkurs</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <Section tone="brand">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Frage zum Ballon-Ultralauf Welver?</h2>
          <p className="mt-6 text-lg leading-relaxed">
            Schreib mir gern kurz, wenn du mehr über die Neuauflage wissen möchtest.
          </p>
          <div className="mt-8">
            <ActionLink href={site.mailtoBallonUltra} variant="onBrand">
              Frage zum Ballon-Ultralauf
            </ActionLink>
          </div>
        </div>
      </Section>
    </>
  );
}
