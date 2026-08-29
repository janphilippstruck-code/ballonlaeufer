import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { site, canonical } from "@/data/site";
import { recurringReferences } from "@/data/references";
import {
  ActionLink,
  Figure,
  Label,
  Section,
  SectionHead,
} from "@/components/site/ui";

export const Route = createFileRoute("/referenzen")({
  head: () => ({
    meta: [
      { title: "Referenzen | Ballonläufer – Zeitmessung & Veranstaltungsbetreuung" },
      {
        name: "description",
        content:
          "Vom Osnabrücker 6-Stunden-Lauf über FREETRAIL bis BORNE TO RUN: Laufveranstaltungen, die Ballonläufer mit Zeitmessung, Moderation und Technik begleitet.",
      },
      { property: "og:title", content: "Referenzen | Ballonläufer" },
      {
        property: "og:description",
        content:
          "Zeitmessung, Moderation und Technik unter echten Veranstaltungsbedingungen – viele Einsätze seit mehreren Jahren.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonical("/referenzen") }],
  }),
  component: ReferenzenPage,
});

function ReferenzenPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-bl grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-14">
          <div>
            <Label>Referenzen</Label>
            <h1 className="mt-5 text-4xl leading-tight md:text-5xl lg:text-[3.4rem]">
              Für Laufveranstaltungen im Einsatz.
            </h1>
            <span className="rule-bl mt-6" aria-hidden="true" />
            <p className="prose-bl mt-6">
              Von familiären Stundenläufen bis zu mehrtägigen Ultraformaten –
              Zeitmessung, Moderation und Technik unter echten
              Veranstaltungsbedingungen.
            </p>
            <p className="prose-bl mt-4">
              Viele Einsätze sind keine einmaligen Aufträge, sondern
              Veranstaltungen, die ich bereits seit mehreren Jahren begleite.
            </p>
          </div>
          <Figure
            src={img.refOsnabrueck}
            alt="Zeitmessungs- und Technikaufbau beim Osnabrücker 6-Stunden-Lauf"
            className="aspect-[4/3]"
            priority
          />
        </div>
      </section>

      <Section tone="surface">
        <SectionHead
          title="Nicht nur kommen, aufbauen, wieder fahren."
          intro={
            <>
              <p>
                Gerade bei wiederkehrenden Veranstaltungen entsteht mit der Zeit
                etwas Wertvolles: Ich kenne den Ablauf, die Strecke, typische
                Stolperstellen und die Anforderungen des Veranstalters. Gleichzeitig
                kann die technische und organisatorische Umsetzung von Jahr zu Jahr
                weiterentwickelt werden.
              </p>
              <p className="mt-4">
                Deshalb sind einige meiner wichtigsten Referenzen Veranstaltungen,
                die ich regelmäßig betreue.
              </p>
            </>
          }
        />
      </Section>

      {/* Osnabrück */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Figure
            src={img.refOsnabrueck}
            alt="Jan-Philipp Struck bei der Zeitmessung des Osnabrücker 6-Stunden-Laufs"
            className="aspect-[4/3]"
          />
          <div>
            <p className="label-bl">seit 2019 · Zeitmessung · regelmäßig</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Osnabrücker 6-Stunden-Lauf</h2>
            <span className="rule-bl mt-5" aria-hidden="true" />
            <p className="prose-bl mt-6">
              Beim Osnabrücker 6-Stunden-Lauf betreue ich seit 2019 regelmäßig die
              Zeitmessung. Gerade bei einem Stundenlauf ist eine laufende und
              verlässliche Rundenerfassung entscheidend – nicht nur für das
              Endergebnis, sondern auch für aktuelle Zwischenstände während der
              Veranstaltung.
            </p>
            <p className="prose-bl mt-4">
              Heute gehören dazu neben der eigentlichen Zeitnahme auch die technische
              Betreuung vor Ort sowie die Darstellung aktueller Ergebnisse.
            </p>
            <p className="mt-6 text-sm font-semibold">
              Mein Bereich: Zeitmessung · Ergebnisdarstellung · technische Betreuung
            </p>
          </div>
        </div>
      </Section>

      {/* FREETRAIL */}
      <Section tone="surface">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="label-bl">seit 2024 · Zeitmessung · Musik</p>
            <h2 className="mt-3 text-3xl md:text-4xl">FREETRAIL Waldlauf</h2>
            <span className="rule-bl mt-5" aria-hidden="true" />
            <p className="prose-bl mt-6">
              Beim FREETRAIL Waldlauf übernehme ich die Zeitmessung und unterstütze
              zusätzlich den Veranstaltungsbereich mit Musik und Technik.
            </p>
            <p className="prose-bl mt-4">
              Das ist ein gutes Beispiel dafür, wie sich mehrere Aufgaben miteinander
              verbinden lassen, ohne dass für jeden Bereich ein eigener Dienstleister
              benötigt wird.
            </p>
          </div>
          <Figure
            src={img.refFreetrail}
            alt="Zeitmessung und Musik beim FREETRAIL Waldlauf"
            className="aspect-[4/3] lg:order-first"
          />
        </div>
      </Section>

      {/* BORNE TO RUN */}
      <Section tone="ink">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Figure
            src={img.refBtrJanMario}
            alt="Jan-Philipp Struck und Mario bei BORNE TO RUN im Start- und Zielbereich"
            className="aspect-[4/3]"
          />
          <div>
            <p className="label-bl">
              seit 2023 · Mitorganisation · Zeitmessung · Moderation · Musik & Technik
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl">BORNE TO RUN</h2>
            <span className="rule-bl mt-5" aria-hidden="true" />
            <p className="prose-bl mt-6 text-ink-muted">
              BORNE TO RUN ist gleichzeitig Veranstaltung und Referenz für das
              Zusammenspiel vieler Ballonläufer-Bereiche. Ich bin hier nicht nur für
              einen einzelnen technischen Baustein vor Ort, sondern organisatorisch
              an der Veranstaltung beteiligt.
            </p>
            <p className="prose-bl mt-4 text-ink-muted">
              Von Teilnehmerverwaltung und Zeitmessung über Live-Ergebnisse bis zu
              Moderation, Musik und Veranstaltungstechnik laufen hier viele Aufgaben
              zusammen. Mit inzwischen 300+ Teilnehmenden und Laufzeiten bis 48
              Stunden ist BORNE TO RUN gleichzeitig eines der umfangreichsten
              Projekte, an denen ich regelmäßig arbeite.
            </p>
            <div className="mt-8">
              <ActionLink href={site.externalBorneToRun} external variant="onInk">
                Zur BORNE TO RUN Website ↗
              </ActionLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Liste */}
      <Section>
        <SectionHead title="Wiederkehrende und weitere Veranstaltungen" />
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {recurringReferences.map((r) => (
            <li
              key={r.name}
              className="rounded-xl border border-border p-6 md:flex md:items-baseline md:justify-between md:gap-6"
            >
              <div>
                <h3 className="text-lg font-bold">{r.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {r.scope.join(" · ")}
                </p>
              </div>
              {r.since ? (
                <span className="mt-3 block text-sm font-semibold whitespace-nowrap text-brand md:mt-0">
                  seit {r.since}
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>

      {/* Besondere Einsätze */}
      <Section tone="surface">
        <SectionHead
          title="Wenn ein Lauf nicht nach Standardschema funktioniert."
          intro={
            <p>
              Ein Teil meiner Einsätze waren Veranstaltungen, bei denen klassische 5-
              oder 10-Kilometer-Logik kaum weiterhilft: lange Zeitformate,
              OCR-Backyards, Bahnläufe, Mehrtagesveranstaltungen oder sehr kleine
              Sonderformate.
            </p>
          }
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-xl border border-border bg-background">
            <Figure
              src={img.refSelfTranscendence}
              alt="Zeitmessung beim Self Transcendence 76-Stunden-Lauf"
              className="aspect-[16/10] rounded-none"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Self Transcendence 76h Special</h3>
              <p className="mt-2 text-sm font-semibold text-brand">
                76 Stunden Zeitmessung
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-xl border border-border bg-background">
            <div className="grid grid-cols-2">
              <Figure
                src={img.refIronLoonsGroup}
                alt="Gruppenbild der Teilnehmenden bei Iron Loons"
                className="aspect-square rounded-none"
              />
              <Figure
                src={img.histIronLoonsCrawl}
                alt="Teilnehmerin beim Iron-Loons-Hindernislauf unter einem Hindernis"
                className="aspect-square rounded-none"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Iron Loons</h3>
              <p className="mt-2 text-sm font-semibold text-brand">
                30-Stunden-OCR-Backyard
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Zeitmessung · Musik · Moderation
              </p>
            </div>
          </article>

          <article className="rounded-xl border border-border bg-background p-6">
            <h3 className="text-xl font-bold">Cube Run</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              12-/24-Stunden-Format mit Zeitmessung und Musik.
            </p>
          </article>

          <article className="overflow-hidden rounded-xl border border-border bg-background">
            <Figure
              src={img.histSevenInHeaven}
              alt="Nächtlicher Rundkurs bei Seven in Heaven"
              className="aspect-[16/10] rounded-none"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Seven in Heaven</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Sieben Marathons in sieben Nächten, damals mit manueller Zeitnahme.
              </p>
            </div>
          </article>
        </div>
      </Section>

      {/* Kleine Veranstaltungen */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead
              title="Nicht jede gute Veranstaltung braucht 300 Starter."
              intro={
                <>
                  <p>
                    Viele der Veranstaltungen, die mich selbst am stärksten geprägt
                    haben, waren klein und familiär. Deshalb ist eine hohe
                    Teilnehmerzahl für mich kein Kriterium dafür, ob ein Lauf
                    interessant ist.
                  </p>
                  <p className="mt-4">
                    Wenn das Konzept passt und meine Leistungen sinnvoll helfen
                    können, kann ein kleiner Bahn-, Stunden- oder Vereinslauf genauso
                    interessant sein wie ein großes Event.
                  </p>
                </>
              }
            />
          </div>
          <Figure
            src={img.refOppasGartenmarathon}
            alt="Gruppenbild der Teilnehmenden bei Oppa’s Gartenmarathon"
            className="aspect-[4/3]"
          />
        </div>
      </Section>

      {/* Vertrauensprinzipien */}
      <Section tone="surface">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Erfahrung aus eigener Organisation",
              "Ich kenne eine Laufveranstaltung nicht nur von außen.",
            ],
            [
              "Ein Ansprechpartner für mehrere Bereiche",
              "Zeitmessung, Moderation und Technik müssen nicht getrennt eingekauft werden.",
            ],
            [
              "Lösungen passend zum Format",
              "Der Aufbau richtet sich nach der Veranstaltung, nicht umgekehrt.",
            ],
            [
              "Erfahrung mit langen Formaten",
              "Stundenläufe, Backyards und Mehrtagesveranstaltungen gehören zum Alltag.",
            ],
          ].map(([t, d]) => (
            <div key={t} className="border-t border-border pt-5">
              <span className="rule-bl w-8" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="brand">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Dein Lauf könnte der nächste sein.</h2>
          <p className="mt-6 text-lg leading-relaxed">
            Wenn du eine Veranstaltung planst und Unterstützung bei Zeitmessung,
            Moderation, Technik oder Organisation suchst, schreib mir kurz, worum es
            geht.
          </p>
          <div className="mt-8">
            <ActionLink href={site.mailtoAnfrage} variant="onBrand">
              Veranstaltung anfragen
            </ActionLink>
          </div>
        </div>
      </Section>
    </>
  );
}
