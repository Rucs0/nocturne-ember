import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/** Shared headline + subcopy block used by every section. */
export function SectionHeading({
  title,
  sub,
  align = "center",
}: {
  title: string;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Reveal>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.08}>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
