import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import {
  ActionLink,
  BulletList,
  Chips,
  Figure,
  Label,
  Section,
  SectionHead,
  StatusBadge,
} from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Ballonläufer – Vom Läufer. Für Läufer. | Zeitmessung & Laufveranstaltungen",
      },
      {
        name: "description",
        content:
          "Zeitmessung mit RACE RESULT, Moderation, Veranstaltungstechnik und Unterstützung für Laufveranstaltungen. Ballonläufer – vom Läufer für Läufer.",
      },
      {
        property: "og:title",
        content: "Ballonläufer – Vom Läufer. Für Läufer.",
      },
      {
        property: "og:description",
        content:
          "Zeitmessung mit RACE RESULT, Moderation, Veranstaltungstechnik und Unterstützung für Laufveranstaltungen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StartPage,
});

const stats = [
  { value: "2018", label: "Veranstalter seit" },
  { value: "50+", label: "Zeitnahme-Einsätze" },
  { value: "76 h", label: "längste Zeitnahme" },
  { value: "300+", label: "Teilnehmende bei einzelnen Veranstaltungen" },
];

const services = [
  {
    title: "Zeitmessung",
    text: "RACE RESULT, Transponderzeitnahme, Live-Ergebnisse, Ergebnisanzeigen und Teilnehmerverwaltung.",
    hash: "zeitmessung",
  },
  {
    title: "Moderation & Musik",
    text: "Moderation, Beschallung und Musik für Start, Ziel und Veranstaltungsbereich.",
    hash: "moderation",
  },
  {
    title: "Organisation & Beratung",
    text: "Unterstützung bei Ablauf, Streckenkonzept, Infrastruktur, Teilnehmermanagement und technischen Lösungen.",
    hash: "organisation",
  },
  {
    title: "Eventgestaltung",
    text: "Startnummern, Urkunden, Beschilderung und einfache Veranstaltungsmedien passend zum Event.",
    hash: "eventgestaltung",
  },
];

function StartPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-background">
        <div className="container-bl grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[47fr_53fr] lg:gap-14 lg:py-20">
          <div className="fade-in-bl">
            <Label>Zeitmessung · Moderation · Veranstaltungstechnik</Label>
            <h1 className="mt-5 text-[2.6rem] leading-[1.05] md:text-6xl lg:text-[4.2rem]">
              Vom Läufer.
              <br />
              Für Läufer.
            </h1>
            <span className="rule-bl mt-6" aria-hidden="true" />
            <p className="prose-bl mt-6 max-w-xl">
              Zeitmessung, Moderation und Unterstützung für Laufveranstaltungen –
              mit der Erfahrung aus eigenen Events und vielen Jahren mitten in der
              Laufszene.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink href={site.mailtoAnfrage}>
                Veranstaltung anfragen
              </ActionLink>
              <ActionLink to="/leistungen" variant="outline">
                Leistungen ansehen →
              </ActionLink>
            </div>
          </div>
          <Figure
            src={img.startHero}
            alt="Jan-Philipp Struck bei der Eröffnung von BORNE TO RUN im Start- und Zielbereich"
            className="aspect-[4/3] lg:aspect-[5/4]"
            position="72% center"
            priority
          />
        </div>
      </section>

      {/* Leistungsübersicht */}
      <Section tone="surface">
        <SectionHead
          label="Leistungen"
          title="Alles, was rund um Start und Ziel funktionieren muss."
          intro={
            <p>
              Vom einzelnen Baustein bis zur kompletten Betreuung: Die Leistungen
              können einzeln oder passend zur Veranstaltung kombiniert werden.
            </p>
          }
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/leistungen"
              hash={s.hash}
              className="group rounded-xl border border-border bg-background p-6 transition-colors hover:border-brand"
            >
              <span className="rule-bl w-8" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
              <span className="mt-5 inline-block text-sm font-semibold text-brand">
                Mehr dazu →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Kennzahlen */}
      <Section tone="ink">
        <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-5xl font-extrabold tracking-tight text-brand lg:text-6xl">
                  {s.value}
                </span>
                <span className="mt-3 block text-sm leading-relaxed text-ink-muted">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Story */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="grid grid-cols-2 gap-4">
            <Figure
              src={img.aboutWhew100}
              alt="Jan-Philipp Struck beim WHEW100 im Jahr 2017"
              className="aspect-[3/4] translate-y-4"
            />
            <Figure
              src={img.startPortrait}
              alt="Aktuelles Portrait von Jan-Philipp Struck"
              className="aspect-[3/4]"
            />
          </div>
          <div>
            <SectionHead
              label="Über mich"
              title="Ich kenne beide Seiten der Startlinie."
              intro={
                <>
                  <p>
                    Als ich 2015 mit dem Laufen angefangen habe, ging es erst
                    einmal nur um ein Ziel: Marathon. Daraus wurden Ultras,
                    100-Kilometer-Läufe und immer längere Herausforderungen.
                  </p>
                  <p className="mt-4">
                    2018 kam die erste eigene Laufveranstaltung dazu. Aus dem
                    Organisieren wurden Zeitmessung, Moderation und immer mehr
                    Aufgaben rund um Laufveranstaltungen.
                  </p>
                  <p className="mt-4">
                    Heute verbinde ich beide Perspektiven: die des Läufers und die
                    des Veranstalters.
                  </p>
                </>
              }
            />
            <p className="mt-8 text-sm font-semibold text-foreground">
              2015 Laufen <span className="text-brand">→</span> 2017 erster 100er{" "}
              <span className="text-brand">→</span> 2018 erste eigene
              Veranstaltung <span className="text-brand">→</span> heute
              Zeitmessung · Moderation · Organisation
            </p>
            <div className="mt-8">
              <ActionLink to="/ueber-mich" variant="outline">
                Mehr über mich →
              </ActionLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Zeitmessung im Fokus */}
      <Section tone="surface">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead
              label="Zeitmessung"
              title="Zeitmessung, die einfach funktionieren muss."
              intro={
                <>
                  <p>
                    Bei einer Laufveranstaltung interessiert am Ende vor allem
                    eines: Sind die Ergebnisse zuverlässig da, wenn sie gebraucht
                    werden?
                  </p>
                  <p className="mt-4">
                    Ich arbeite mit RACE RESULT und betreue je nach Veranstaltung
                    den gesamten Ablauf von der Teilnehmerverwaltung über die
                    Zeitnahme bis zu Live-Ergebnissen und Anzeigen vor Ort.
                  </p>
                </>
              }
            />
            <Chips
              items={[
                "Zeitmessung mit RACE RESULT",
                "aktuell rund 340 Mehrwegtransponder",
                "Live-Ergebnisse online",
                "Ergebnisanzeige vor Ort",
                "Teilnehmer- und Meldedaten",
                "Startnummern & Urkundendruck",
              ]}
            />
            <div className="mt-8">
              <ActionLink to="/leistungen" hash="zeitmessung" variant="outline">
                Zeitmessung im Detail →
              </ActionLink>
            </div>
          </div>
          <Figure
            src={img.startZeitmessung}
            alt="Zeitmessungs-Arbeitsplatz beim Osnabrücker 6-Stunden-Lauf"
            className="aspect-[4/3] lg:order-first"
          />
        </div>
      </Section>

      {/* Moderation, Musik & Technik */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Figure
            src={img.startModeration}
            alt="Jan-Philipp Struck bei der Moderation von BORNE TO RUN"
            className="aspect-[4/3]"
          />
          <div>
            <SectionHead
              label="Moderation & Technik"
              title="Mehr als nur Zeiten stoppen."
              intro={
                <>
                  <p>
                    Viele Laufveranstaltungen brauchen nicht für jede Aufgabe
                    einen eigenen Dienstleister. Auf Wunsch verbinde ich
                    Zeitmessung mit Moderation, Musik und technischer Betreuung
                    rund um Start und Ziel.
                  </p>
                  <p className="mt-4">
                    Das spart Schnittstellen und sorgt dafür, dass jemand vor Ort
                    den gesamten Veranstaltungsablauf im Blick hat.
                  </p>
                </>
              }
            />
            <p className="mt-8 text-sm font-semibold">
              Moderation · Funkmikrofon · Beschallung · Musik · Ergebnisdisplays ·
              Veranstaltungstechnik
            </p>
          </div>
        </div>
      </Section>

      {/* Eigene Veranstaltungen */}
      <Section tone="surface">
        <SectionHead
          label="Eigene Veranstaltungen"
          title="Veranstaltungen, die ich selbst gerne laufen würde."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="overflow-hidden rounded-xl border border-border bg-background">
            <Figure
              src={img.histBallonUltraStart}
              alt="Start des Ballon-Ultralaufs 2019"
              className="aspect-[16/10] rounded-none"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Ballon-Ultralauf</h3>
              <p className="mt-1 text-sm font-semibold text-brand">
                Wo alles begann.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                2018 begann mit dem Ballon-Ultralauf die eigene
                Veranstaltergeschichte.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-xl border border-border bg-background">
            <Figure
              src={img.eventBtrMedal}
              alt="Medaillenübergabe bei BORNE TO RUN"
              className="aspect-[16/10] rounded-none"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">BORNE TO RUN</h3>
              <p className="mt-1 text-sm font-semibold text-brand">
                Laufen für den guten Zweck.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Mehrstündige Laufveranstaltung mit bis zu 48 Stunden und inzwischen
                300+ Teilnehmenden. Mitorganisation, Zeitmessung, Moderation und
                Technik.
              </p>
              <a
                href={site.externalBorneToRun}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-brand"
              >
                Zur BORNE TO RUN Website ↗
              </a>
            </div>
          </article>

          <article className="overflow-hidden rounded-xl border border-border bg-background">
            <Figure
              src={img.histIronLoonsCrawl}
              alt="Teilnehmerin beim Iron-Loons-Hindernislauf unter einem Hindernis"
              className="aspect-[16/10] rounded-none"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Besondere Formate</h3>
              <p className="mt-1 text-sm font-semibold text-brand">
                Nicht immer nach demselben Rezept.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Backyards, Nachtformate, OCR, digitale Challenges und andere
                Laufideen.
              </p>
            </div>
          </article>
        </div>
        <div className="mt-10">
          <ActionLink to="/veranstaltungen" variant="outline">
            Meine Veranstaltungen →
          </ActionLink>
        </div>
      </Section>

      {/* Projekte */}
      <Section>
        <SectionHead label="Projekte" title="Gerade in Arbeit." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col overflow-hidden rounded-xl border border-border"
            >
              <Figure
                src={p.image}
                alt={p.imageAlt}
                className="aspect-[16/10] rounded-none"
                imgClassName={p.imageIsLogo ? "object-contain p-6" : undefined}
              />
              <div className="flex flex-1 flex-col p-6">
                <StatusBadge>
                  {p.status} · {p.year}
                </StatusBadge>
                <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">
                  {p.shortDescription}
                </p>
                <div className="mt-5 pt-1">
                  {p.external ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-brand"
                    >
                      {p.linkLabel}
                    </a>
                  ) : (
                    <Link
                      to={p.href}
                      className="text-sm font-semibold text-brand"
                    >
                      {p.linkLabel}
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <ActionLink to="/projekte" variant="outline">
            Alle Projekte →
          </ActionLink>
        </div>
      </Section>

      {/* Referenzen */}
      <Section tone="surface">
        <SectionHead
          label="Referenzen"
          title="Für andere Veranstaltungen im Einsatz."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <article className="overflow-hidden rounded-xl border border-border bg-background">
            <Figure
              src={img.refOsnabrueck}
              alt="Aufbau der Zeitmessung beim Osnabrücker 6-Stunden-Lauf"
              className="aspect-[16/9] rounded-none"
            />
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold">Osnabrücker 6-Stunden-Lauf</h3>
              <p className="mt-2 text-sm font-semibold text-brand">
                Zeitmessung · seit 2019 regelmäßig im Einsatz
              </p>
            </div>
          </article>
          <div className="grid gap-6">
            <article className="overflow-hidden rounded-xl border border-border bg-background">
              <Figure
                src={img.refFreetrail}
                alt="Zeitmessung beim FREETRAIL Waldlauf"
                className="aspect-[16/10] rounded-none"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">FREETRAIL Waldlauf</h3>
                <p className="mt-2 text-sm font-semibold text-brand">
                  Zeitmessung & Musik · seit 2024
                </p>
              </div>
            </article>
            <article className="rounded-xl border border-border bg-background p-6">
              <h3 className="text-xl font-bold">BORNE TO RUN</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Mitorganisation · Zeitmessung · Moderation · Musik & Technik
              </p>
            </article>
          </div>
        </div>
        <div className="mt-10">
          <ActionLink to="/referenzen" variant="outline">
            Alle Referenzen ansehen →
          </ActionLink>
        </div>
      </Section>

      {/* Persönlicher Abschluss */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Aus einem Hobby wurde Ballonläufer.</h2>
          <span className="rule-bl mt-5" aria-hidden="true" />
          <p className="prose-bl mt-6">
            Ich bin kein klassischer Eventdienstleister, der irgendwann den
            Laufsport als Markt entdeckt hat. Der Weg war genau andersherum. Erst
            kam das Laufen – und daraus alles andere.
          </p>
          <div className="mt-8">
            <ActionLink to="/ueber-mich" variant="outline">
              Meine Geschichte →
            </ActionLink>
          </div>
        </div>
      </Section>

      {/* Kontakt CTA */}
      <Section tone="brand">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Du planst einen Lauf?</h2>
          <p className="mt-6 text-lg leading-relaxed">
            Egal ob du Unterstützung bei der Zeitmessung brauchst, jemanden für
            Moderation und Technik suchst oder deine Veranstaltung gemeinsam
            weiterentwickeln möchtest: Erzähl mir, was du vorhast.
          </p>
          <div className="mt-8">
            <ActionLink href={site.mailtoAnfrage} variant="onBrand">
              Veranstaltung anfragen
            </ActionLink>
          </div>
          <p className="mt-4 text-sm opacity-90">
            Auch einzelne Leistungen sind möglich.
          </p>
        </div>
      </Section>
    </>
  );
}
