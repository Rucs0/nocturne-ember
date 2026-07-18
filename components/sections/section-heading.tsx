import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/** Shared eyebrow + headline + subcopy block used by every section. */
export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Reveal>
        <p className="text-xs font-semibold tracking-widest text-brand uppercase">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
