import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 min-h-11 text-sm font-semibold transition-colors";

const btnVariants = {
  primary: "bg-brand text-brand-foreground hover:bg-brand/90",
  outline: "border border-border bg-background text-foreground hover:bg-surface",
  ghost: "text-foreground hover:text-brand px-0",
  onInk:
    "border border-ink-foreground/25 text-ink-foreground hover:bg-ink-foreground/10",
  onBrand: "bg-brand-foreground text-brand hover:bg-brand-foreground/90",
} as const;

type Variant = keyof typeof btnVariants;

export function ActionLink({
  href,
  to,
  hash,
  variant = "primary",
  external,
  className,
  children,
}: {
  href?: string | undefined;
  to?: string | undefined;
  hash?: string | undefined;
  variant?: Variant | undefined;
  external?: boolean | undefined;
  className?: string | undefined;
  children: ReactNode;
}) {
  const cls = cn(btnBase, btnVariants[variant], className);
  if (to) {
    return (
      <Link to={to} {...(hash ? { hash } : {})} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={cls}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function Section({
  tone = "light",
  id,
  className,
  children,
}: {
  tone?: "light" | "surface" | "ink" | "brand" | undefined;
  id?: string | undefined;
  className?: string | undefined;
  children: ReactNode;
}) {
  const tones = {
    light: "bg-background text-foreground",
    surface: "bg-surface text-surface-foreground",
    ink: "bg-ink text-ink-foreground",
    brand: "bg-brand text-brand-foreground",
  } as const;
  return (
    <section
      id={id}
      className={cn("py-14 md:py-24 scroll-mt-24", tones[tone], className)}
    >
      <div className="container-bl">{children}</div>
    </section>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return <p className="label-bl">{children}</p>;
}

export function SectionHead({
  label,
  title,
  intro,
  align = "left",
  invert = false,
}: {
  label?: string | undefined;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center" | undefined;
  invert?: boolean | undefined;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {label ? (
        <p className={cn("label-bl", invert && "text-brand")}>{label}</p>
      ) : null}
      <h2 className="mt-3 text-3xl leading-tight md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      <span
        className={cn("rule-bl mt-5", align === "center" && "mx-auto")}
        aria-hidden="true"
      />
      {intro ? (
        <div
          className={cn(
            "prose-bl mt-6",
            invert && "text-ink-muted",
          )}
        >
          {intro}
        </div>
      ) : null}
    </div>
  );
}

export function Figure({
  src,
  alt,
  className,
  imgClassName,
  position,
  priority,
}: {
  src: string;
  alt: string;
  className?: string | undefined;
  imgClassName?: string | undefined;
  position?: string | undefined;
  priority?: boolean | undefined;
}) {
  return (
    <figure className={cn("overflow-hidden rounded-xl bg-surface", className)}>
      <img
        src={src}
        alt={alt}
        className={cn("h-full w-full object-cover", imgClassName)}
        style={position ? { objectPosition: position } : undefined}
        loading={priority ? "eager" : "lazy"}
        {...(priority ? { fetchPriority: "high" as const } : {})}
        decoding="async"
      />
    </figure>
  );
}

export function Chips({
  items,
  invert = false,
}: {
  items: readonly string[];
  invert?: boolean;
}) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((i) => (
        <li
          key={i}
          className={cn(
            "rounded-md border px-3 py-1.5 text-sm",
            invert
              ? "border-ink-foreground/20 text-ink-muted"
              : "border-border text-muted-foreground",
          )}
        >
          {i}
        </li>
      ))}
    </ul>
  );
}

export function StatusBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-brand/10 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-brand uppercase">
      {children}
    </span>
  );
}

export function BulletList({
  items,
  invert = false,
  columns = 1,
}: {
  items: readonly string[];
  invert?: boolean;
  columns?: 1 | 2;
}) {
  return (
    <ul
      className={cn(
        "mt-6 space-y-3",
        columns === 2 && "sm:columns-2 sm:gap-8 sm:space-y-0",
      )}
    >
      {items.map((i) => (
        <li
          key={i}
          className={cn(
            "flex gap-3 text-[1.0625rem] leading-relaxed sm:mb-3 sm:break-inside-avoid",
            invert ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          <span
            aria-hidden="true"
            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
          />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}
