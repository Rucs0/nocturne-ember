"use client";

import Link from "next/link";
import { Fragment } from "react";
import { motion } from "motion/react";
import { ArrowRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBoard } from "@/components/mock/status-board";
import { site } from "@/lib/site";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const headline = ["Know", "before", "your", "users", "do."];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      {/* Ambient warmth behind the fold */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[34rem] w-[64rem] -translate-x-1/2 rounded-full opacity-55 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklch, var(--brand) 40%, transparent), transparent)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="glass inline-flex items-center gap-2 rounded-full py-1.5 pr-4 pl-1.5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/15 px-2.5 py-0.5 text-xs font-medium text-brand">
                <Activity className="size-3" />
                Live
              </span>
              Checks from 14 regions, every 10 seconds
            </span>
          </motion.div>

          <h1 className="mt-7 text-5xl leading-[1.05] font-semibold tracking-tighter text-balance sm:text-6xl md:text-7xl">
            {headline.map((word, i) => (
              // The inter-word space must sit OUTSIDE the overflow-hidden
              // box — a trailing space inside an inline-block gets trimmed,
              // and the words render jammed together.
              <Fragment key={i}>
                {/* pr/-mr pair: the italic words lean past the content edge and
                    overflow-hidden clips the final glyph. The padding gives the
                    lean room inside the box; the equal negative margin keeps the
                    word spacing exactly where it was. */}
                <span className="inline-block overflow-hidden pb-1 pr-[0.12em] -mr-[0.12em] align-bottom">
                  <motion.span
                    className={
                      i >= 3
                        ? "font-display text-gradient-brand inline-block italic"
                        : "inline-block"
                    }
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: EASE }}
                  >
                    {word}
                  </motion.span>
                </span>
                {i < headline.length - 1 ? " " : null}
              </Fragment>
            ))}
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-lg text-pretty text-muted-foreground"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
          >
            {site.description}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.54, ease: EASE }}
          >
            <Button asChild size="lg" className="h-12 rounded-full px-7 text-base">
              <Link href={site.cta.primary.href}>
                {site.cta.primary.label}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full bg-transparent px-7 text-base"
            >
              <Link href={site.cta.secondary.href}>{site.cta.secondary.label}</Link>
            </Button>
          </motion.div>

          <motion.p
            className="mt-5 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.66, ease: EASE }}
          >
            Free for 3 monitors. No card required.
          </motion.p>
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-4xl"
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
        >
          <StatusBoard />
        </motion.div>
      </div>
    </section>
  );
}
