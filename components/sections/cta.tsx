import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Cta() {
  return (
    <section className="pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="noise relative overflow-hidden rounded-3xl border px-6 py-16 text-center sm:px-12">
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-70"
              style={{
                background:
                  "radial-gradient(80% 120% at 50% 0%, color-mix(in oklch, var(--brand) 26%, transparent), transparent 70%)",
              }}
              aria-hidden
            />
            <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Find out about the next one{" "}
              <span className="text-gradient-brand italic">before your customers do.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
              Three monitors free, forever. It takes about ninety seconds to point
              {" "}{site.name}{" "}at your first endpoint.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-7 text-base">
                <Link href={site.cta.primary.href}>
                  {site.cta.primary.label}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
