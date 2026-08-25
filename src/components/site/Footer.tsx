import { Link } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { nav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-bl py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <span className="inline-flex rounded-lg bg-background px-4 py-3">
              <img
                src={img.logoFullTransparent}
                alt="Ballonläufer"
                className="h-11 w-auto"
                loading="lazy"
              />
            </span>
            <p className="mt-5 text-lg font-bold">{site.claim}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
              Zeitmessung, Moderation und Unterstützung für Laufveranstaltungen.
            </p>
          </div>

          <nav aria-label="Footer-Navigation">
            <h2 className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-ink-muted transition-colors hover:text-ink-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">
              Kontakt
            </h2>
            <p className="mt-4 text-sm font-semibold">{site.owner}</p>
            <a
              href={site.mailtoAnfrage}
              className="mt-1 inline-block text-sm text-ink-muted transition-colors hover:text-ink-foreground"
            >
              {site.email}
            </a>
            <ul className="mt-6 space-y-2.5">
              <li>
                <Link
                  to="/impressum"
                  className="text-sm text-ink-muted transition-colors hover:text-ink-foreground"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  to="/datenschutz"
                  className="text-sm text-ink-muted transition-colors hover:text-ink-foreground"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-ink-foreground/15 pt-6 text-xs text-ink-muted">
          © {new Date().getFullYear()} Ballonläufer · {site.owner}
        </p>
      </div>
    </footer>
  );
}
