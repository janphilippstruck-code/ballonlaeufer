import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { site, canonical } from "@/data/site";
import {
  ActionLink,
  BulletList,
  Chips,
  Figure,
  Label,
  Section,
  SectionHead,
} from "@/components/site/ui";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen | Ballonläufer – Zeitmessung, Moderation & Technik" },
      {
        name: "description",
        content:
          "Zeitmessung mit RACE RESULT, Moderation, Musik, Veranstaltungstechnik und organisatorische Unterstützung für Laufveranstaltungen – einzeln buchbar oder kombiniert.",
      },
      {
        property: "og:title",
        content: "Leistungen | Ballonläufer",
      },
      {
        property: "og:description",
        content:
          "Zeitmessung, Moderation, Technik und Organisation für Laufveranstaltungen – so viel Unterstützung, wie deine Veranstaltung braucht.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonical("/leistungen") }],
  }),
  component: LeistungenPage,
});

const jumpLinks = [
  { label: "Zeitmessung", hash: "zeitmessung" },
  { label: "Moderation & Musik", hash: "moderation" },
  { label: "Organisation", hash: "organisation" },
  { label: "Eventgestaltung", hash: "eventgestaltung" },
];

function LeistungenPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-bl grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-14">
          <div>
            <Label>Leistungen</Label>
            <h1 className="mt-5 text-4xl leading-tight md:text-5xl lg:text-[3.4rem]">
              So viel Unterstützung, wie deine Veranstaltung braucht.
            </h1>
            <span className="rule-bl mt-6" aria-hidden="true" />
            <p className="prose-bl mt-6">
              Zeitmessung, Moderation, Technik und organisatorische Unterstützung
              für Laufveranstaltungen – einzeln buchbar oder sinnvoll miteinander
              kombiniert.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink href={site.mailtoAnfrage}>
                Veranstaltung anfragen
              </ActionLink>
              <ActionLink to="/leistungen" hash="zeitmessung" variant="outline">
                Zeitmessung ansehen ↓
              </ActionLink>
            </div>
          </div>
          <Figure
            src={img.refOsnabrueck}
            alt="Kompletter Zeitmessungs- und Technikaufbau beim Osnabrücker 6-Stunden-Lauf"
            className="aspect-[4/3]"
            priority
          />
        </div>
      </section>

      <Section tone="surface">
        <SectionHead
          title="Nicht jede Veranstaltung braucht das gleiche Paket."
          intro={
            <>
              <p>
                Ein kleiner Bahn- oder Stundenlauf stellt andere Anforderungen als
                eine Veranstaltung mit mehreren hundert Teilnehmenden oder ein
                mehrtägiger Ultralauf. Deshalb gibt es bei Ballonläufer keine
                starren Pakete.
              </p>
              <p className="mt-4">
                Du kannst einzelne Leistungen buchen – zum Beispiel ausschließlich
                die Zeitmessung – oder mehrere Bereiche miteinander verbinden. Ich
                schaue mit dir gemeinsam, was für deine Veranstaltung tatsächlich
                sinnvoll ist.
              </p>
            </>
          }
        />
        <nav aria-label="Sprungmarken" className="mt-8">
          <ul className="flex flex-wrap gap-3">
            {jumpLinks.map((l) => (
              <li key={l.hash}>
                <a
                  href={`#${l.hash}`}
                  className="inline-flex min-h-11 items-center rounded-md border border-border bg-background px-4 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Section>

      {/* Zeitmessung */}
      <Section id="zeitmessung">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead
              label="Baustein 01"
              title="Zeitmessung"
              intro={
                <>
                  <p className="text-lg font-semibold text-foreground">
                    Zuverlässige Ergebnisse – während des Laufes und danach.
                  </p>
                  <p className="mt-4">
                    Ich betreue elektronische Zeitmessungen mit RACE RESULT und
                    passe den Aufbau an das jeweilige Veranstaltungsformat an. Das
                    reicht vom klassischen Rundenzähler über Stundenläufe bis zu
                    Veranstaltungen mit unterschiedlichen Distanzen und Wertungen.
                  </p>
                  <p className="mt-4">
                    Dabei kann ich nicht nur die eigentliche Messung übernehmen,
                    sondern auch die dazugehörigen Abläufe rund um Meldedaten,
                    Live-Ergebnisse und Ergebnisdarstellung betreuen.
                  </p>
                </>
              }
            />
            <BulletList
              items={[
                "Zeitmessung mit RACE RESULT",
                "aktuell rund 340 Mehrwegtransponder",
                "Einrichtung der Veranstaltung und Wertungen",
                "Rundenzählung und unterschiedliche Wettbewerbe",
                "Live-Ergebnisse über das Internet",
                "Ergebnisanzeigen direkt im Veranstaltungsbereich",
                "Betreuung und Kontrolle der laufenden Zeitnahme",
                "Ergebnislisten und Auswertungen",
                "Unterstützung bei Teilnehmer- und Meldedaten",
              ]}
            />
          </div>
          <Figure
            src={img.startZeitmessung}
            alt="Jan-Philipp Struck bei der Zeitmessung des Osnabrücker 6-Stunden-Laufs"
            className="aspect-[4/3] lg:sticky lg:top-28"
          />
        </div>
      </Section>

      {/* Ergebnisse vor Ort */}
      <Section tone="surface">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Figure
            src={img.serviceResultsDisplay}
            alt="Große Ergebnisanzeige im Veranstaltungsbereich in Osnabrück"
            className="aspect-[4/3]"
          />
          <div>
            <SectionHead
              title="Ergebnisse müssen nicht erst nach dem Zieleinlauf sichtbar sein."
              intro={
                <>
                  <p>
                    Bei passenden Veranstaltungen können aktuelle Ergebnisse und
                    Zwischenstände direkt vor Ort angezeigt werden. Dafür stehen
                    unter anderem eine große 65-Zoll-Anzeige sowie weitere Monitore
                    zur Verfügung.
                  </p>
                  <p className="mt-4">
                    Gerade bei Stundenläufen und Rundkursen sorgt das dafür, dass
                    Läufer, Zuschauer und Helfer jederzeit einen Überblick haben.
                    Parallel können Live-Ergebnisse online bereitgestellt werden.
                  </p>
                </>
              }
            />
          </div>
        </div>
      </Section>

      {/* Meldung & Co */}
      <Section>
        <SectionHead
          title="Rund um die Zeitmessung steckt mehr als nur der Zieleinlauf."
          intro={
            <p>
              Auf Wunsch beginnt meine Unterstützung bereits vor dem
              Veranstaltungstag. Ich kann beim Aufbau der Veranstaltung in RACE
              RESULT, bei Online-Anmeldung und Teilnehmerverwaltung unterstützen
              und die benötigten Daten für die Zeitmessung vorbereiten.
            </p>
          }
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Online-Anmeldung",
              d: "Einrichtung und Unterstützung bei der Anmeldung über RACE RESULT.",
            },
            {
              t: "Teilnehmerdaten",
              d: "Vorbereitung, Kontrolle und Verwaltung der benötigten Meldedaten.",
            },
            {
              t: "Startnummern",
              d: "Organisation und je nach Veranstaltung Vorbereitung bzw. Produktion passender Startnummern.",
            },
            {
              t: "Urkunden",
              d: "Vorbereitete Urkundenvorlagen und Druck vor Ort sind möglich.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-border p-6">
              <span className="rule-bl w-8" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Moderation & Musik */}
      <Section id="moderation" tone="ink">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Figure
            src={img.startModeration}
            alt="Jan-Philipp Struck moderiert BORNE TO RUN mit Funkmikrofon"
            className="aspect-[4/3]"
          />
          <div>
            <SectionHead
              label="Baustein 02"
              invert
              title="Moderation & Musik"
              intro={
                <>
                  <p className="text-lg font-semibold text-ink-foreground">
                    Damit Start und Ziel nicht nur funktionieren, sondern sich auch
                    nach Veranstaltung anfühlen.
                  </p>
                  <p className="mt-4">
                    Ich moderiere Laufveranstaltungen vom Start über Zwischenstände
                    und Zieleinläufe bis zu Siegerehrungen. Dabei geht es mir nicht
                    um dauerhafte Beschallung, sondern darum, die Veranstaltung
                    passend zu begleiten und Informationen verständlich zu
                    vermitteln.
                  </p>
                  <p className="mt-4">
                    Auf Wunsch übernehme ich gleichzeitig die Musik und Beschallung
                    im Start-/Zielbereich. Dadurch lassen sich Zeitmessung,
                    Moderation und Technik besonders gut miteinander verbinden.
                  </p>
                </>
              }
            />
            <BulletList
              invert
              items={[
                "Moderation – Start, Zieleinläufe, Zwischenstände, Hinweise, Ehrungen",
                "Musik – passende Hintergrund- und Veranstaltungsmusik",
                "Beschallung – Lautsprechertechnik für Start-/Ziel- und Veranstaltungsbereich",
                "Mikrofontechnik – Funkmikrofon sowie zusätzliche mobile Mikrofontechnik",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Veranstaltungstechnik */}
      <Section tone="surface">
        <SectionHead
          title="Technik, die rund um Start und Ziel gebraucht wird."
          intro={
            <p>
              Neben Zeitmessung und Beschallung kann ich weitere Technik und
              Infrastruktur für den Veranstaltungsbereich mitbringen. Was davon
              sinnvoll ist, hängt vom jeweiligen Gelände und vorhandenen Material
              des Veranstalters ab.
            </p>
          }
        />
        <Chips
          items={[
            "Ergebnisanzeigen und Monitore",
            "Laptops",
            "Drucker",
            "Mobilfunk-/WLAN-Lösung",
            "Lautsprecher",
            "Mikrofone",
            "Kabel- und Stromverteilung",
            "Pavillons",
            "Tische",
            "einfache Beschilderung",
          ]}
        />
      </Section>

      {/* Organisation & Beratung */}
      <Section id="organisation">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHead
              label="Baustein 03"
              title="Organisation & Beratung"
              intro={
                <>
                  <p className="text-lg font-semibold text-foreground">
                    Erfahrung aus eigenen Veranstaltungen – für deine Veranstaltung.
                  </p>
                  <p className="mt-4">
                    Seit 2018 organisiere ich selbst Laufveranstaltungen und habe
                    dabei sehr unterschiedliche Formate begleitet: kleine familiäre
                    Läufe, Stundenläufe, Ultras, mehrtägige Veranstaltungen und
                    Events mit mehreren hundert Teilnehmenden.
                  </p>
                  <p className="mt-4">
                    Diese Erfahrung kann ich auch dann einbringen, wenn du nicht die
                    komplette Veranstaltung abgeben möchtest. Oft reicht schon eine
                    zweite Perspektive auf Ablauf, Strecke, Start-/Zielbereich oder
                    technische Umsetzung.
                  </p>
                </>
              }
            />
          </div>
          <div>
            <BulletList
              columns={2}
              items={[
                "Veranstaltungs- und Ablaufkonzept",
                "Start-/Zielorganisation",
                "Strecken- und Rundensysteme",
                "Zeit- und Startpläne",
                "Teilnehmermanagement",
                "Infrastrukturplanung",
                "technische Abläufe",
                "Lösungen in RACE RESULT",
                "Weiterentwicklung bestehender Veranstaltungen",
              ]}
            />
            <p className="mt-8 border-l-2 border-brand pl-5 text-lg font-semibold">
              Du bleibst Veranstalter. Ich unterstütze dort, wo Erfahrung, Technik
              oder eine zusätzliche Hand gebraucht werden.
            </p>
          </div>
        </div>
      </Section>

      {/* Eventgestaltung */}
      <Section id="eventgestaltung" tone="surface">
        <SectionHead
          label="Baustein 04"
          title="Kleine Dinge, die eine Veranstaltung rund machen."
          intro={
            <>
              <p>
                Wenn man selbst Veranstaltungen organisiert, entstehen neben Strecke
                und Zeitmessung irgendwann ganz automatisch noch hundert andere
                Dinge: Startnummern, Urkunden, Schilder, Social-Media-Bilder oder die
                Idee für ein Veranstaltungslogo.
              </p>
              <p className="mt-4">
                Auch dabei kann ich unterstützen. Nicht als steife
                Design-Dienstleistung, sondern pragmatisch und gemeinsam mit dir – so,
                dass es zu deiner Veranstaltung passt.
              </p>
            </>
          }
        />
        <Chips
          items={[
            "Startnummern",
            "Urkunden",
            "Beschilderung",
            "einfache Social-Media-Grafiken",
            "Veranstaltungslogos",
            "T-Shirt- und Bannerideen",
          ]}
        />
      </Section>

      {/* Kombinationen */}
      <Section>
        <SectionHead title="Einzelne Leistung oder Gesamtpaket?" />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {[
            {
              t: "Nur Zeitmessung",
              d: "Veranstalter organisiert, Ballonläufer übernimmt Zeitmessung und Ergebnisse.",
            },
            {
              t: "Zeitmessung + Moderation",
              d: "Zeitnahme, Live-Ergebnisse, Musik und Moderation aus einer Hand.",
            },
            {
              t: "Umfangreiche Begleitung",
              d: "Unterstützung schon vor dem Event bei RACE RESULT, Teilnehmerverwaltung, Ablauf und Technik plus Betreuung vor Ort.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-border p-7">
              <h3 className="text-xl font-bold">{c.t}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Keine dieser Kombinationen ist ein starres Paket. Der Umfang richtet sich
          nach deiner Veranstaltung.
        </p>
      </Section>

      {/* Ablauf */}
      <Section tone="ink">
        <SectionHead invert title="Von der Idee zum Veranstaltungstag." />
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Du erzählst mir von deiner Veranstaltung.",
              d: "Format, Teilnehmerzahl, Strecke, Zeitmessung und was bereits vorhanden ist.",
            },
            {
              t: "Wir klären, was du wirklich brauchst.",
              d: "Nicht jede technische Möglichkeit muss eingesetzt werden.",
            },
            {
              t: "Ich bereite meinen Bereich vor.",
              d: "Zeitmessung, Teilnehmerdaten, Technik und vereinbarte Materialien.",
            },
            {
              t: "Am Veranstaltungstag läuft es.",
              d: "Aufbau, Betreuung und Nachbereitung entsprechend des vereinbarten Umfangs.",
            },
          ].map((s, i) => (
            <li key={s.t} className="border-t border-ink-foreground/20 pt-5">
              <span className="text-3xl font-extrabold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Preise */}
      <Section tone="surface">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Was kostet das?</h2>
          <span className="rule-bl mt-5" aria-hidden="true" />
          <p className="prose-bl mt-6">
            Das hängt von Größe, Dauer und gewünschtem Leistungsumfang deiner
            Veranstaltung ab. Schreib mir kurz, was du planst. Danach lässt sich
            ziemlich schnell einschätzen, welche Lösung sinnvoll ist.
          </p>
          <div className="mt-8">
            <ActionLink href={site.mailtoAnfrage}>Unverbindlich anfragen</ActionLink>
          </div>
        </div>
      </Section>

      <Section tone="brand">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Was brauchst du für deinen Lauf?</h2>
          <p className="mt-6 text-lg leading-relaxed">
            Nur Zeitmessung? Moderation und Musik? Oder Unterstützung bei mehreren
            Bereichen? Beschreib mir kurz deine Veranstaltung – den Rest klären wir
            gemeinsam.
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
