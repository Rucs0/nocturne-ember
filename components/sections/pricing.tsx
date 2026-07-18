import Link from "next/link";
import { Check } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    name: "Hobby",
    price: "$0",
    cadence: "forever",
    blurb: "For side projects and the one service you actually care about.",
    features: [
      "3 monitors, 60s interval",
      "2 regions",
      "Email alerts",
      "7-day history",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Team",
    price: "$29",
    cadence: "per month",
    blurb: "For teams with an on-call rotation and customers who notice.",
    features: [
      "50 monitors, 10s interval",
      "All 14 regions",
      "Escalation policies & quiet hours",
      "Branded status page",
      "Deploy-aware timelines",
      "90-day history",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Business",
    price: "$99",
    cadence: "per month",
    blurb: "For when downtime has a dollar figure attached to it.",
    features: [
      "Unlimited monitors",
      "Private regions & VPC checks",
      "SSO / SAML",
      "Audit log & SLA reporting",
      "Priority support",
      "2-year history",
    ],
    cta: "Talk to us",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Priced per monitor, not per engineer"
          sub="Adding a teammate never costs more. Every plan includes the full alerting stack — the tiers differ in scale, not in whether you get woken up correctly."
        />

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3" gap={0.1}>
          {TIERS.map((tier) => (
            <StaggerItem key={tier.name}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl border bg-card p-7",
                  tier.featured && "border-beam border-brand/30 shadow-xl shadow-brand/5",
                )}
              >
                {tier.featured && (
                  <span className="mb-4 self-start rounded-full bg-brand/15 px-3 py-1 text-xs font-medium text-brand">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-lg font-medium tracking-tight">{tier.name}</h3>
                <p className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold tracking-tighter">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">{tier.cadence}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tier.blurb}</p>

                <ul className="mt-6 space-y-3 text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={tier.featured ? "default" : "outline"}
                  className={cn("mt-8 w-full rounded-full", !tier.featured && "bg-transparent")}
                >
                  <Link href="#">{tier.cta}</Link>
                </Button>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
