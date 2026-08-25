import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { pastProjects, projects } from "@/data/projects";
import {
  ActionLink,
  Chips,
  Figure,
  Label,
  Section,
  SectionHead,
  StatusBadge,
} from "@/components/site/ui";

export const Route = createFileRoute("/projekte/")({
  head: () => ({
    meta: [
      { title: "Projekte | Ballonläufer – neue Laufideen & Formate" },
      {
        name: "description",
        content:
          "Ultra verfolgt, die Rückkehr des Ballon-Ultralaufs und der Hammer Backyard Ultra: Laufprojekte, die bei Ballonläufer gerade entstehen.",
      },
      { property: "og:title", content: "Projekte | Ballonläufer" },
      {
        property: "og:description",
        content:
          "Neue Laufideen, ungewöhnliche Formate und Projekte, die gerade entstehen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjektePage,
});

function ProjektePage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-bl py-14 md:py-20">
        <div className="max-w-3xl">
          <Label>Projekte</Label>
          <h1 className="mt-5 text-4xl leading-tight md:text-5xl lg:text-[3.4rem]">
            Was gerade entsteht.
          </h1>
          <span className="rule-bl mt-6" aria-hidden="true" />
          <p className="prose-bl mt-6">
            Neue Laufideen, ungewöhnliche Formate und Projekte, bei denen ich einfach
            ausprobieren möchte, was möglich ist.
          </p>
          <p className="prose-bl mt-4">
            Nicht jede Idee wird sofort eine klassische Laufveranstaltung – und genau
            das macht diesen Bereich spannend.
          </p>
        </div>
      </section>

      {projects.map((p, i) => (
        <Section key={p.slug} tone={i % 2 === 0 ? "surface" : "light"}>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Figure
              src={p.image}
              alt={p.imageAlt}
              className={
                p.imageIsLogo
                  ? "aspect-[4/3] bg-background"
                  : "aspect-[4/3]"
              }
              imgClassName={p.imageIsLogo ? "object-contain p-8" : undefined}
              {...(i % 2 === 1 ? {} : {})}
            />
            <div className={i % 2 === 1 ? "lg:order-first" : undefined}>
              <StatusBadge>
                {p.status} · {p.year}
              </StatusBadge>
              <h2 className="mt-4 text-3xl md:text-4xl">
                {p.title === "Ultra verfolgt"
                  ? "Ultra verfolgt – Gejagt bis ins Ziel."
                  : p.shortDescription}
              </h2>
              <span className="rule-bl mt-5" aria-hidden="true" />
              {p.longDescription.map((t) => (
                <p key={t} className="prose-bl mt-5">
                  {t}
                </p>
              ))}
              <Chips items={p.facts} />
              <div className="mt-8">
                {p.external ? (
                  <ActionLink href={p.href} external variant="outline">
                    {p.linkLabel}
                  </ActionLink>
                ) : (
                  <ActionLink to={p.href} variant="outline">
                    {p.linkLabel}
                  </ActionLink>
                )}
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section tone="ink">
        <SectionHead
          invert
          title="Weil „haben wir immer so gemacht“ ziemlich langweilig wäre."
          intro={
            <>
              <p>
                Mich interessieren nicht nur klassische Laufveranstaltungen. Ich mag
                Formate, die eine zusätzliche Idee mitbringen – eine besondere
                Strecke, ein ungewöhnliches Zeitmodell, ein spielerisches Element
                oder einfach einen anderen Blick aufs Laufen.
              </p>
              <p className="mt-4">
                Manche Ideen werden große Veranstaltungen. Andere bleiben kleine
                Experimente. Und manche funktionieren vielleicht überhaupt nicht.
                Aber genau dafür ist dieser Bereich da.
              </p>
            </>
          }
        />
      </Section>

      <Section>
        <SectionHead title="Schon ausprobiert." />
        {pastProjects.length > 0 ? (
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {pastProjects.map((p) => (
              <li key={p.slug} className="rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {p.shortDescription}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="prose-bl mt-6 max-w-3xl">
            Abgeschlossene Formate findest du bei{" "}
            <Link
              to="/veranstaltungen"
              className="font-semibold text-brand underline"
            >
              meinen Veranstaltungen
            </Link>
            .
          </p>
        )}
      </Section>

      <Section tone="brand">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl">
            Eine Idee muss nicht fertig sein, bevor man darüber spricht.
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            Vielleicht hast du selbst ein Laufkonzept im Kopf und weißt noch nicht
            genau, wie Strecke, Zeitmessung, Ablauf oder Technik funktionieren
            könnten. Genau solche Fragen finde ich spannend.
          </p>
          <div className="mt-8">
            <ActionLink href={site.mailtoProjektidee} variant="onBrand">
              Projektidee schicken
            </ActionLink>
          </div>
        </div>
      </Section>
    </>
  );
}
