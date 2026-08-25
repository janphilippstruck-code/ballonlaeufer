import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import {
  ActionLink,
  Figure,
  Label,
  Section,
  SectionHead,
} from "@/components/site/ui";

export const Route = createFileRoute("/ueber-mich")({
  head: () => ({
    meta: [
      { title: "Über mich | Ballonläufer – Vom Läufer. Für Läufer." },
      {
        name: "description",
        content:
          "Jan-Philipp Struck: 2015 erster Marathon, 2017 erster 100er, 2018 erste eigene Laufveranstaltung – und daraus wurde Ballonläufer.",
      },
      { property: "og:title", content: "Über mich | Ballonläufer" },
      {
        property: "og:description",
        content:
          "Erst kam das Laufen. Dann alles andere. Die Geschichte hinter Ballonläufer.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UeberMichPage,
});

function UeberMichPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-bl grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-14">
          <div>
            <Label>Über mich</Label>
            <h1 className="mt-5 text-4xl leading-tight md:text-5xl lg:text-[3.4rem]">
              Erst kam das Laufen.
              <br />
              Dann alles andere.
            </h1>
            <span className="rule-bl mt-6" aria-hidden="true" />
            <p className="prose-bl mt-6">
              2015 habe ich mit dem Laufen angefangen. Aus dem ersten Marathon wurden
              Ultras, aus der Begeisterung für kleine Laufveranstaltungen eigene
              Events – und irgendwann Ballonläufer.
            </p>
            <p className="mt-6 text-sm font-semibold">
              Jan-Philipp Struck · Läufer · Veranstalter · Zeitnehmer · Moderator
            </p>
          </div>
          <Figure
            src={img.startPortrait}
            alt="Portrait von Jan-Philipp Struck"
            className="aspect-[4/5] max-w-md lg:ml-auto"
            priority
          />
        </div>
      </section>

      {/* Anfang */}
      <Section tone="surface">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead
              title="Eigentlich wollte ich nur einen Marathon laufen."
              intro={
                <>
                  <p>
                    Im April 2015 habe ich mit dem Laufen angefangen. Mein Bruder
                    hatte damals selbst angefangen zu laufen und immer davon
                    gesprochen, irgendwann einen Marathon zu schaffen. Wie das unter
                    Brüdern manchmal so ist, dachte ich mir: Das will ich auch.
                  </p>
                  <p className="mt-4">
                    Ein paar Monate später stand ich tatsächlich beim Köln Marathon
                    an der Startlinie. Mein erster offizieller Wettkampf war damit
                    direkt ein Marathon. Im Oktober 2015 kam ich nach ungefähr 3:50
                    Stunden ins Ziel.
                  </p>
                  <p className="mt-4">
                    Danach war ziemlich schnell klar: Besonders schnell würde ich
                    wahrscheinlich nie werden – aber lange laufen, das lag mir.
                  </p>
                </>
              }
            />
          </div>
          <Figure
            src={img.aboutFirstMarathon}
            alt="Jan-Philipp Struck in seiner Anfangszeit als Läufer"
            className="aspect-[4/3]"
          />
        </div>
      </Section>

      {/* Ultras */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Figure
            src={img.aboutWhew100}
            alt="Jan-Philipp Struck beim WHEW100 im Jahr 2017"
            className="aspect-[4/3]"
          />
          <div>
            <SectionHead
              title="Irgendwann wurden aus Marathons Ultras."
              intro={
                <>
                  <p>
                    Über meinen Lauftreff und andere Läufer bekam ich immer mehr
                    Geschichten von Ultramarathons, langen Trails und ungewöhnlichen
                    Veranstaltungen mit. Genau diese Formate fand ich spannend.
                  </p>
                  <p className="mt-4">
                    Im Mai 2017 finishte ich beim WHEW100 zum ersten Mal 100
                    Kilometer. Danach wurde das Laufen nicht unbedingt vernünftiger.
                  </p>
                </>
              }
            />
            <p className="mt-8 text-sm font-semibold">
              2015 erster Marathon <span className="text-brand">→</span> 2017 erster
              100-km-Finish <span className="text-brand">→</span> 2018 1.716
              Wettkampfkilometer
            </p>
          </div>
        </div>
      </Section>

      {/* 2018 */}
      <Section tone="ink">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHead
              invert
              label="2018"
              title="2018 – das Jahr, in dem es ein bisschen eskalierte."
              intro={
                <>
                  <p>
                    2018 wurde aus „gerne lange laufen“ endgültig ein ziemlich
                    intensives Hobby. Fünf Spendenmarathons an fünf Tagen, mehrere
                    6-Stunden-Läufe, Ultras, 100 Kilometer beim WHEW, ein Triple
                    Marathon und schließlich mehr als 127 Kilometer beim Traildorado
                    innerhalb von 24 Stunden.
                  </p>
                  <p className="mt-4">
                    Beim Zugspitz Supertrail war ich außerdem erstmals als Guide für
                    einen blinden Läufer unterwegs – eine Erfahrung, die mir bis
                    heute besonders in Erinnerung geblieben ist.
                  </p>
                </>
              }
            />
            <p className="mt-8 inline-block border-l-2 border-brand pl-5 text-lg font-bold">
              UNION Sportler des Jahres 2018 · Platz 1 · Laufen
            </p>
          </div>
          <div className="grid gap-5">
            <Figure
              src={img.aboutSdjGroup}
              alt="Gruppenfoto der Ehrung UNION Sportler des Jahres 2018"
              className="aspect-[4/3]"
            />
            <Figure
              src={img.aboutSdjStage}
              alt="Jan-Philipp Struck auf der Bühne bei der Ehrung 2018"
              className="aspect-[16/9] max-w-xs"
            />
          </div>
        </div>
      </Section>

      {/* Übergang */}
      <Section>
        <SectionHead
          title="Irgendwann wollte ich selbst wissen, wie so ein Lauf entsteht."
          intro={
            <>
              <p>
                Mich haben schon früh besonders kleine, familiäre und etwas
                ungewöhnliche Veranstaltungen begeistert. Nicht unbedingt die größten
                Stadtmarathons, sondern die Läufe, bei denen man merkte, dass jemand
                wirklich Spaß daran hatte, dieses Format auf die Beine zu stellen.
              </p>
              <p className="mt-4">
                Bevor ich meinen ersten eigenen Lauf organisiert habe, hatte ich
                bereits bei Online-Laufchallenges organisatorisch mitgearbeitet – mit
                Anmeldungen, Tabellen, Kilometerständen und Auswertungen.
              </p>
              <p className="mt-4">
                2018 kam dann der erste eigene Ballon-Ultralauf. Nicht mit einem
                großen Businessplan, sondern eher mit der Frage: Warum nicht einfach
                mal ausprobieren, ob das funktioniert?
              </p>
            </>
          }
        />
      </Section>

      {/* Technikentwicklung */}
      <Section tone="surface">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Figure
            src={img.aboutTechCubeRun}
            alt="Technischer Aufbau der Zeitmessung beim Cube Run"
            className="aspect-[4/3]"
          />
          <div>
            <SectionHead
              title="Die Technik kam Schritt für Schritt dazu."
              intro={
                <>
                  <p>
                    Beim ersten Ballon-Ultralauf wurden die Zeiten noch über eine
                    Selbsteingabe auf einem Tablet erfasst. Bei Online-Challenges
                    liefen Kilometerstände über Formulare und Tabellen.
                  </p>
                  <p className="mt-4">
                    Mit größeren Veranstaltungen wuchsen auch die Anforderungen.
                    Elektronische Zeitmessung, Live-Ergebnisse, Ergebnisanzeigen,
                    Teilnehmerverwaltung, Musik und Moderation kamen nach und nach
                    dazu.
                  </p>
                  <p className="mt-4">
                    Aus dem Veranstalten wurde irgendwann auch das Betreuen anderer
                    Veranstaltungen.
                  </p>
                </>
              }
            />
            <ol className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-semibold">
              {[
                "Formulare & Tabellen",
                "Tablet-Zeiterfassung",
                "RACE RESULT",
                "Live-Ergebnisse & Technik",
                "Veranstaltungsbegleitung",
              ].map((s, i, arr) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="rounded-md border border-border bg-background px-3 py-1.5">
                    {s}
                  </span>
                  {i < arr.length - 1 ? (
                    <span className="text-brand" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* Heute */}
      <Section>
        <SectionHead
          title="Heute bin ich immer noch Läufer – nur öfter auf der anderen Seite der Ziellinie."
          intro={
            <>
              <p>
                Heute betreue ich Laufveranstaltungen mit Zeitmessung, Moderation und
                Technik, unterstütze bei der Organisation und entwickle gleichzeitig
                eigene Formate weiter.
              </p>
              <p className="mt-4">
                Dabei hilft mir, dass ich eine Veranstaltung nicht nur aus Sicht des
                Zeitnehmers kenne. Ich weiß, wie sich ein langer Lauf für Teilnehmer
                anfühlt, welche Informationen unterwegs wichtig sind – und ich kenne
                gleichzeitig die organisatorische Seite hinter Startbogen, Laptop und
                Ergebnisliste.
              </p>
            </>
          }
        />
        <p className="mt-12 text-4xl font-extrabold tracking-tight text-brand md:text-6xl">
          Vom Läufer. Für Läufer.
        </p>
      </Section>

      {/* Was wichtig ist */}
      <Section tone="surface">
        <SectionHead title="Was für mich eine gute Laufveranstaltung ausmacht." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            [
              "Sie muss für Läufer funktionieren.",
              "Technik und Organisation sind Mittel zum Zweck.",
            ],
            [
              "Sie darf Persönlichkeit haben.",
              "Nicht jeder Lauf muss aussehen wie der nächste.",
            ],
            [
              "Klein ist nicht automatisch weniger professionell.",
              "Auch ein familiärer Vereinslauf verdient eine saubere Organisation.",
            ],
            [
              "Und manchmal darf eine Idee auch einfach ein bisschen verrückt sein.",
              "Viele der spannendsten Formate entstehen genau daraus.",
            ],
          ].map(([t, d]) => (
            <div
              key={t}
              className="rounded-xl border border-border bg-background p-7"
            >
              <h3 className="text-lg font-bold">{t}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Ausblick */}
      <Section>
        <SectionHead title="Fertig ist das Ganze sowieso nie." />
        <ul className="mt-10 flex flex-wrap gap-3">
          {projects.map((p) => (
            <li
              key={p.slug}
              className="rounded-md border border-border px-4 py-2 text-sm font-semibold"
            >
              {p.title}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <ActionLink to="/projekte" variant="outline">
            Aktuelle Projekte ansehen →
          </ActionLink>
        </div>
      </Section>

      {/* Kontakt */}
      <Section tone="brand">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Und wenn du selbst einen Lauf planst …</h2>
          <p className="mt-6 text-lg leading-relaxed">
            …und das Gefühl hast, dass Ballonläufer dazu passen könnte, schreib mir
            einfach. Am liebsten kurz und unkompliziert per Mail.
          </p>
          <p className="mt-6 font-bold">{site.owner}</p>
          <p className="opacity-90">{site.email}</p>
          <div className="mt-8">
            <ActionLink href={site.mailtoAnfrage} variant="onBrand">
              E-Mail schreiben
            </ActionLink>
          </div>
        </div>
      </Section>
    </>
  );
}
