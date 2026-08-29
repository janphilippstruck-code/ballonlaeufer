import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { site, canonical } from "@/data/site";
import { chronicle } from "@/data/events";
import {
  ActionLink,
  Figure,
  Label,
  Section,
  SectionHead,
} from "@/components/site/ui";

export const Route = createFileRoute("/veranstaltungen")({
  head: () => ({
    meta: [
      { title: "Eigene Laufveranstaltungen | Ballonläufer" },
      {
        name: "description",
        content:
          "Vom ersten Ballon-Ultralauf 2018 über Sonderformate bis zu BORNE TO RUN: die eigenen Laufveranstaltungen von Ballonläufer.",
      },
      { property: "og:title", content: "Eigene Laufveranstaltungen | Ballonläufer" },
      {
        property: "og:description",
        content:
          "Veranstaltungen, die ich selbst gerne laufen würde – Ballon-Ultralauf, Sonderformate und BORNE TO RUN.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonical("/veranstaltungen") }],
  }),
  component: VeranstaltungenPage,
});

function VeranstaltungenPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-bl grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-14">
          <div>
            <Label>Eigene Veranstaltungen</Label>
            <h1 className="mt-5 text-4xl leading-tight md:text-5xl lg:text-[3.4rem]">
              Veranstaltungen, die ich selbst gerne laufen würde.
            </h1>
            <span className="rule-bl mt-6" aria-hidden="true" />
            <p className="prose-bl mt-6">
              Kleine Ideen, lange Nächte, ziemlich viele Kilometer – und der
              Anspruch, Veranstaltungen zu schaffen, bei denen ich selbst gern an
              der Startlinie stehen würde.
            </p>
            <p className="prose-bl mt-4">
              2018 habe ich meinen ersten eigenen Ultralauf organisiert. Eigentlich
              erst einmal, um auszuprobieren, ob so etwas überhaupt funktioniert.
              Daraus sind über die Jahre ganz unterschiedliche Veranstaltungen und
              Formate entstanden.
            </p>
          </div>
          <Figure
            src={img.histSevenInHeaven}
            alt="Läuferinnen und Läufer bei einer eigenen Ballonläufer-Veranstaltung"
            className="aspect-[4/3]"
            priority
          />
        </div>
      </section>

      {/* Ballon-Ultralauf */}
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead
              title="Ballon-Ultralauf Welver"
              intro={
                <>
                  <p className="text-lg font-semibold text-foreground">
                    Wo Ballonläufer angefangen hat.
                  </p>
                  <p className="mt-4">
                    2018 wollte ich einfach einmal selbst eine kleine
                    Laufveranstaltung auf die Beine stellen. Ich mochte schon damals
                    besonders die familiären, ungewöhnlichen Läufe – Veranstaltungen,
                    bei denen es nicht um großes Eventmarketing ging, sondern ums
                    gemeinsame Laufen.
                  </p>
                  <p className="mt-4">
                    Der erste Ballon-Ultralauf war entsprechend überschaubar. Die
                    Zeiten wurden noch über eine einfache Selbsteingabe auf einem
                    Tablet erfasst. Was als Versuch begann, entwickelte sich aber
                    ziemlich schnell weiter.
                  </p>
                </>
              }
            />
            <ul className="mt-8 space-y-4 border-l border-border pl-6">
              {[
                ["2018", "erste Veranstaltung, Zeiterfassung per Tablet"],
                ["2019", "Winter Edition mit erstmals über 50 Teilnehmenden"],
                ["Sommer 2019", "elektronische Zeitmessung, Musik und Moderation"],
                ["danach", "weitere Ultras, Sonderformate und Ballonathons"],
              ].map(([y, t]) => (
                <li key={y} className="relative">
                  <span
                    className="absolute top-2 -left-[1.8rem] h-2 w-2 rounded-full bg-brand"
                    aria-hidden="true"
                  />
                  <span className="font-bold">{y}</span>
                  <span className="text-muted-foreground"> – {t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Figure
              src={img.histBallonUltraEventaufbau}
              alt="Aufbau des Veranstaltungsbereichs beim Ballon-Ultralauf in Welver"
              className="aspect-[4/3] sm:col-span-2"
            />
            <Figure
              src={img.histBallonUltraJubelgruppe}
              alt="Jubelnde Läuferinnen und Läufer beim Ballon-Ultralauf in Welver"
              className="aspect-[4/3]"
            />
            <Figure
              src={img.histBallonUltraGruppenfoto}
              alt="Gruppenfoto der Teilnehmenden beim Ballon-Ultralauf in Welver"
              className="aspect-[4/3]"
            />
          </div>
        </div>
      </Section>

      {/* Sonderformate */}
      <Section>
        <SectionHead
          title="Ein bisschen ausprobieren gehört dazu."
          intro={
            <p>
              Nicht jede Veranstaltung muss jedes Jahr genauso wiederkommen. Gerade
              in den ersten Jahren habe ich viele Formate ausprobiert – manche groß,
              manche bewusst klein und manche einfach, weil die Idee zu verrückt war,
              um sie nicht umzusetzen.
            </p>
          }
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="overflow-hidden rounded-xl border border-border">
            <Figure
              src={img.histBallonathonBackyardGlocke}
              alt="Glocke und Unterlagen des Ballonathon Backyard"
              className="aspect-[16/10] rounded-none"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Ballonathon Backyard</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Wiederkehrendes Rundenformat aus dem Ballonläufer-Umfeld.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-xl border border-border">
            <Figure
              src={img.histBallonUltra125Meilen}
              alt="Veranstaltungsschild des Ballon-Ultralaufs über 125 Meilen bzw. 200 Kilometer"
              className="aspect-[16/10] rounded-none"
              position="center 22%"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Ballon-Ultralauf 125 Meilen</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Neun Etappen. Bis zu 200 Kilometer.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-xl border border-border">
            <Figure
              src={img.histZoomUltra}
              alt="Digitales Laufformat Zoom Ultra im Jahr 2021"
              className="aspect-[16/10] rounded-none"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Zoom Ultra</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                2021 als digitales Format mit 65 Teilnehmenden, mehr als 3.000
                gelaufenen Kilometern und acht 100-km-Finishern.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-xl border border-border">
            <Figure
              src={img.histIronLoonsCrawl}
              alt="Teilnehmerin beim Iron-Loons-Hindernislauf unter einem Hindernis"
              className="aspect-[16/10] rounded-none"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Iron Loons</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                30-Stunden-OCR-Backyard.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-xl border border-border">
            <Figure
              src={img.histSevenInHeaven}
              alt="Nächtlicher Rundkurs bei Seven in Heaven"
              className="aspect-[16/10] rounded-none"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Seven in Heaven</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Sieben Marathons in sieben Nächten.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-xl border border-border">
            <Figure
              src={img.histKostuemWendepunktlauf}
              alt="Gruppe verkleideter Läuferinnen und Läufer beim Kostüm-Wendepunktlauf"
              className="aspect-[16/10] rounded-none"
              position="center 72%"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">
                Kostüm-Wendepunktlauf & Ballonathons
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Manchmal entsteht ein Format einfach aus einer Schnapsidee im
                Lauftreff. Nicht jede Idee muss vollkommen vernünftig sein – gelaufen
                wird trotzdem.
              </p>
            </div>
          </article>
        </div>
      </Section>

      {/* BORNE TO RUN */}
      <Section tone="ink">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHead
              invert
              label="Größtes Projekt"
              title="BORNE TO RUN"
              intro={
                <>
                  <p className="text-lg font-semibold text-ink-foreground">
                    Aus einer Laufveranstaltung wurde ein gemeinsames Großprojekt.
                  </p>
                  <p className="mt-4">
                    BORNE TO RUN ist heute die größte Veranstaltung, an der ich
                    organisatorisch beteiligt bin. Über verschiedene Stundenformate
                    hinweg laufen mehrere hundert Teilnehmerinnen und Teilnehmer auf
                    einem Rundkurs – vom kurzen Einstieg bis zum 48-Stunden-Lauf.
                  </p>
                  <p className="mt-4">
                    Hier laufen viele Bereiche zusammen, die Ballonläufer heute
                    ausmachen: Organisation, Teilnehmermanagement, Zeitmessung,
                    Live-Ergebnisse, Moderation, Musik und Veranstaltungstechnik.
                  </p>
                </>
              }
            />
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {[
                ["bis zu 48 h", "Laufzeit"],
                ["300+", "Teilnehmende"],
                ["seit 2023", "jährlich"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd>
                    <span className="block text-2xl font-extrabold text-brand lg:text-3xl">
                      {v}
                    </span>
                    <span className="mt-1 block text-sm text-ink-muted">{l}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 border-l-2 border-brand pl-5 font-semibold">
              Gemeinsam organisiert – nicht einfach nur als externer Dienstleister
              betreut.
            </p>
            <div className="mt-8">
              <ActionLink
                href={site.externalBorneToRun}
                external
                variant="onInk"
              >
                Zur BORNE TO RUN Website ↗
              </ActionLink>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Figure
              src={img.refBtrJanMarioNeu}
              alt="Jan-Philipp Struck und Mario unter dem Start- und Zielbanner von BORNE TO RUN"
              className="aspect-[16/10] sm:col-span-2"
              position="center 35%"
            />
            <Figure
              src={img.eventBtrMedal}
              alt="Medaillenübergabe bei BORNE TO RUN"
              className="aspect-square"
            />
            <Figure
              src={img.startModeration}
              alt="Moderation bei BORNE TO RUN"
              className="aspect-square"
            />
          </div>
        </div>
      </Section>

      {/* Testfeld */}
      <Section>
        <SectionHead
          title="Eigene Veranstaltungen sind mein Testfeld."
          intro={
            <>
              <p>
                Viele Lösungen, die ich heute bei anderen Laufveranstaltungen
                einsetze, habe ich zuerst bei meinen eigenen Events ausprobiert. Was
                funktioniert bei der Anmeldung? Welche Informationen brauchen Läufer
                wirklich? Wo sollte ein Ergebnisbildschirm stehen? Was passiert, wenn
                eine Veranstaltung statt sechs plötzlich 48 Stunden dauert?
              </p>
              <p className="mt-4">
                Diese Erfahrungen lassen sich schwer aus einem Handbuch lernen.
              </p>
              <p className="mt-4">
                Genau deshalb gehören eigene Veranstaltungen für mich zu Ballonläufer
                dazu.
              </p>
            </>
          }
        />
      </Section>

      {/* Chronik */}
      <Section tone="surface">
        <SectionHead title="Chronik" />
        <ol className="mt-12 max-w-3xl space-y-6 border-l border-border pl-7">
          {chronicle.map((c) => (
            <li key={c.year} className="relative">
              <span
                className="absolute top-2.5 -left-[2.05rem] h-2.5 w-2.5 rounded-full bg-brand"
                aria-hidden="true"
              />
              <span className="block text-lg font-bold">{c.year}</span>
              <span className="mt-1 block text-muted-foreground">{c.text}</span>
            </li>
          ))}
        </ol>
        <p className="prose-bl mt-10 max-w-3xl">
          Daneben gab und gibt es zahlreiche kleinere Ballonathons und private
          Laufprojekte – manchmal offiziell organisiert, manchmal einfach mit ein
          paar laufverrückten Freunden.
        </p>
      </Section>

      <Section tone="brand">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Du hast selbst eine Idee?</h2>
          <p className="mt-6 text-lg leading-relaxed">
            Vielleicht soll es kein Ballon-Ultra und kein Backyard werden. Wenn du
            eine eigene Laufveranstaltung planst und bei Konzept, Zeitmessung, Ablauf
            oder Technik Unterstützung gebrauchen kannst, können wir uns das
            gemeinsam ansehen.
          </p>
          <div className="mt-8">
            <ActionLink href={site.mailtoProjektidee} variant="onBrand">
              Idee besprechen
            </ActionLink>
          </div>
        </div>
      </Section>
    </>
  );
}
