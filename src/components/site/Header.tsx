import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { img } from "@/lib/images";
import { nav, site } from "@/data/site";
import { ActionLink } from "./ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div
        className={cn(
          "container-bl flex items-center justify-between transition-all",
          scrolled ? "h-16 md:h-[76px]" : "h-[68px] md:h-[100px]",
        )}
      >
        <Link to="/" className="flex items-center" aria-label="Ballonläufer – zur Startseite">
          <img
            src={img.logoFullTransparent}
            alt="Ballonläufer"
            className={cn(
              "h-auto w-auto max-w-[170px] object-contain transition-all sm:max-w-[200px]",
              scrolled
                ? "max-h-9 md:max-h-11 md:max-w-[210px]"
                : "max-h-10 md:max-h-[62px] md:max-w-[250px]",
            )}
          />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground [&.active]:underline [&.active]:decoration-brand [&.active]:decoration-2 [&.active]:underline-offset-8"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ActionLink href={site.mailtoAnfrage}>Veranstaltung anfragen</ActionLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile Navigation" className="container-bl py-6">
            <ul className="divide-y divide-border">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="flex min-h-14 items-center text-lg font-semibold [&.active]:text-brand"
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ActionLink
              href={site.mailtoAnfrage}
              className="mt-6 w-full"
            >
              Veranstaltung anfragen
            </ActionLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
