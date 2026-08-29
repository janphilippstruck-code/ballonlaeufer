import { createFileRoute } from "@tanstack/react-router";
import { site, canonical } from "@/data/site";
import { Label } from "@/components/site/ui";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz | Ballonläufer" },
      {
        name: "description",
        content:
          "Datenschutzerklärung von Ballonläufer – Jan-Philipp Struck: Hosting, Kontaktaufnahme per E-Mail und deine Rechte.",
      },
      { property: "og:title", content: "Datenschutz | Ballonläufer" },
      {
        property: "og:description",
        content:
          "Datenschutzerklärung von Ballonläufer – Hosting, Kontaktaufnahme per E-Mail und deine Rechte.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: canonical("/datenschutz") }],
  }),
  component: DatenschutzPage,
});

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="prose-bl mt-4 space-y-4">{children}</div>
    </section>
  );
}

function DatenschutzPage() {
  return (
    <div className="container-bl py-14 md:py-24">
      <div className="max-w-3xl">
        <Label>Rechtliches</Label>
        <h1 className="mt-5 text-4xl md:text-5xl">Datenschutzerklärung</h1>
        <span className="rule-bl mt-6" aria-hidden="true" />

        <Block title="1. Verantwortlicher">
          <address className="space-y-1 not-italic">
            <p className="font-semibold text-foreground">Jan-Philipp Struck</p>
            <p>Ballonläufer</p>
            <p>Brüggenkampstr. 10</p>
            <p>59077 Hamm</p>
            <p>Deutschland</p>
          </address>
          <p>
            E-Mail:{" "}
            <a href={`mailto:${site.email}`} className="text-brand underline">
              {site.email}
            </a>
          </p>
        </Block>

        <Block title="2. Hosting und technische Bereitstellung">
          <p>
            Diese Website wird mit Lovable bereitgestellt. Anbieter ist Lovable Labs
            Incorporated (Lovable).
          </p>
          <p>
            Beim Aufruf der Website können technisch erforderliche Daten verarbeitet werden,
            insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite,
            Browser-/Geräteinformationen sowie technische Protokoll- und Fehlerdaten. Die
            Verarbeitung ist erforderlich, um die Website auszuliefern, ihre Stabilität und
            Sicherheit zu gewährleisten und Missbrauch zu verhindern.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse liegt in
            der sicheren und zuverlässigen Bereitstellung dieser Website.
          </p>
          <p>
            Weitere Informationen zur Datenverarbeitung durch Lovable sind in der
            Datenschutzerklärung von Lovable verfügbar:{" "}
            <a
              href="https://lovable.dev/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline"
            >
              https://lovable.dev/privacy/
            </a>
          </p>
        </Block>

        <Block title="3. Kontaktaufnahme per E-Mail">
          <p>
            Wenn du mich per E-Mail kontaktierst, verarbeite ich die von dir übermittelten Daten,
            insbesondere deine E-Mail-Adresse, deinen Namen (sofern angegeben) sowie den Inhalt
            deiner Nachricht, um deine Anfrage zu bearbeiten und zu beantworten.
          </p>
          <p>
            Je nach Inhalt der Anfrage erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1
            lit. b DSGVO (vorvertragliche Maßnahmen bzw. Vertragserfüllung) oder Art. 6 Abs. 1
            lit. f DSGVO (berechtigtes Interesse an der Bearbeitung sonstiger Anfragen).
          </p>
          <p>
            Die Daten werden gelöscht, sobald sie für die Bearbeitung der Anfrage nicht mehr
            erforderlich sind, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>
        </Block>

        <Block title="4. Externe Links">
          <p>
            Die Website enthält Links zu externen Angeboten, zum Beispiel zu BORNE TO RUN und
            Ultra verfolgt. Erst wenn du einen solchen Link anklickst, wird eine Verbindung zur
            jeweiligen externen Website hergestellt. Für die Datenverarbeitung auf diesen externen
            Websites ist der jeweilige Betreiber verantwortlich.
          </p>
        </Block>

        <Block title="5. Analyse, Marketing und Cookies">
          <p>
            Auf dieser Website sind derzeit keine zusätzlichen Webanalyse- oder Marketingdienste
            wie Google Analytics oder Google Ads Conversion-Tracking eingebunden. Es werden durch
            mich derzeit keine nicht technisch erforderlichen Tracking-Cookies zu Analyse- oder
            Werbezwecken gesetzt.
          </p>
          <p>
            Die Google Search Console dient ausschließlich der Auswertung der Auffindbarkeit der
            Website in der Google-Suche und erfordert keine Einbindung eines Tracking-Skripts auf
            dieser Website.
          </p>
          <p>
            Falls künftig Analyse- oder Werbedienste eingebunden werden, wird diese
            Datenschutzerklärung entsprechend aktualisiert und – soweit erforderlich – eine
            Einwilligungslösung eingesetzt.
          </p>
        </Block>

        <Block title="6. Deine Rechte">
          <p>
            Du hast nach Maßgabe der gesetzlichen Voraussetzungen insbesondere folgende Rechte:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>Auskunft über die zu deiner Person verarbeiteten Daten (Art. 15 DSGVO),</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
            <li>Löschung (Art. 17 DSGVO),</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO),</li>
            <li>
              Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21
              DSGVO).
            </li>
          </ul>
          <p>
            Zur Ausübung deiner Rechte genügt eine Nachricht an:{" "}
            <a href={`mailto:${site.email}`} className="text-brand underline">
              {site.email}
            </a>
          </p>
        </Block>

        <Block title="7. Beschwerderecht">
          <p>
            Du hast außerdem das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren.
            Für mich zuständig ist insbesondere:
          </p>
          <address className="space-y-1 not-italic">
            <p className="font-semibold text-foreground">
              Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI
              NRW)
            </p>
            <p>Kavalleriestraße 2–4</p>
            <p>40213 Düsseldorf</p>
            <p>
              <a
                href="https://www.ldi.nrw.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline"
              >
                https://www.ldi.nrw.de/
              </a>
            </p>
          </address>
        </Block>

        <Block title="8. Stand">
          <p>Stand: August 2026</p>
        </Block>
      </div>
    </div>
  );
}
