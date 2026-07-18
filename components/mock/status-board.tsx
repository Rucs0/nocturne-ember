"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { CountUp } from "@/components/motion/count-up";

/* Fictional service data for the demo board. Swap this for your own API
   response — the layout is driven entirely by the arrays below. */
type Status = "ok" | "degraded";

const SERVICES: {
  name: string;
  region: string;
  status: Status;
  latency: number;
  history: number[];
}[] = [
  {
    name: "api.production",
    region: "us-east-1",
    status: "ok",
    latency: 84,
    history: [38, 44, 41, 52, 47, 43, 39, 45, 42, 48, 40, 44],
  },
  {
    name: "checkout-service",
    region: "eu-west-2",
    status: "degraded",
    latency: 612,
    history: [42, 39, 45, 41, 48, 52, 61, 74, 88, 96, 92, 99],
  },
  {
    name: "auth.edge",
    region: "global",
    status: "ok",
    latency: 31,
    history: [28, 31, 26, 33, 29, 27, 32, 28, 30, 26, 29, 31],
  },
  {
    name: "media-pipeline",
    region: "ap-south-1",
    status: "ok",
    latency: 147,
    history: [55, 48, 61, 53, 58, 50, 62, 54, 49, 57, 51, 56],
  },
];

const DOT: Record<Status, string> = {
  ok: "bg-emerald-500",
  degraded: "bg-amber-500",
};

export function StatusBoard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const play = inView || reduce;

  return (
    <div
      ref={ref}
      className="noise relative overflow-hidden rounded-2xl border bg-card shadow-2xl shadow-black/10"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
        </div>
        <div className="flex flex-1 justify-center">
          <span className="rounded-md bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
            status.ember.dev
          </span>
        </div>
        <div className="w-14" />
      </div>

      {/* Summary strip */}
      <div className="grid grid-cols-3 divide-x border-b">
        <Stat label="Uptime, 90d" value={99.98} decimals={2} suffix="%" />
        <Stat label="Median latency" value={94} suffix="ms" />
        <Stat label="Open incidents" value={1} />
      </div>

      {/* Service rows */}
      <ul className="divide-y">
        {SERVICES.map((svc, row) => (
          <li key={svc.name} className="flex items-center gap-4 px-4 py-3.5 sm:px-5">
            <span className="relative flex size-2.5 shrink-0">
              <span
                className={`absolute inline-flex size-full rounded-full opacity-60 ${DOT[svc.status]} ${
                  svc.status === "degraded" ? "animate-pulse-dot" : ""
                }`}
              />
              <span className={`relative inline-flex size-2.5 rounded-full ${DOT[svc.status]}`} />
            </span>

            <div className="min-w-0 flex-1">
              <p className="truncate font-mono text-sm">{svc.name}</p>
              <p className="text-xs text-muted-foreground">{svc.region}</p>
            </div>

            {/* Latency history — bars grow when the board scrolls into view */}
            <div className="hidden h-8 items-end gap-[3px] sm:flex" aria-hidden>
              {svc.history.map((h, i) => (
                <motion.span
                  key={i}
                  className={`w-1.5 rounded-sm ${
                    svc.status === "degraded" ? "bg-amber-500/70" : "bg-brand/45"
                  }`}
                  initial={{ height: 2 }}
                  animate={play ? { height: `${h}%` } : { height: 2 }}
                  transition={{
                    duration: 0.5,
                    delay: reduce ? 0 : 0.35 + row * 0.08 + i * 0.02,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              ))}
            </div>

            <p
              className={`w-16 shrink-0 text-right font-mono text-sm tabular-nums ${
                svc.status === "degraded" ? "text-amber-500" : "text-muted-foreground"
              }`}
            >
              {svc.latency}ms
            </p>
          </li>
        ))}
      </ul>

      {/* Incident callout */}
      <div className="border-t bg-amber-500/8 px-4 py-3 sm:px-5">
        <p className="text-sm">
          <span className="font-medium text-amber-500">Investigating</span>
          {" — "}
          elevated latency on checkout-service (eu-west-2). Detected
          <span className="font-medium text-foreground"> 40s </span>
          before the first user report.
        </p>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  suffix = "",
  decimals = 0,
}: {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  return (
    <div className="px-4 py-4 text-center sm:px-5">
      <p className="text-2xl font-semibold tracking-tight tabular-nums">
        <CountUp value={value} suffix={suffix} decimals={decimals} />
      </p>
      <p className="mt-0.5 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
