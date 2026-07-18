import { Bell, Globe2, GitBranch, ShieldCheck } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { SectionHeading } from "@/components/sections/section-heading";

const FEATURES = [
  {
    icon: Globe2,
    title: "Checks from 14 regions",
    body: "Every monitor runs from the places your users actually are. Regional failures surface as regional, not as a confusing global blip.",
  },
  {
    icon: Bell,
    title: "Alerts that respect sleep",
    body: "Escalation policies, quiet hours, and dependency-aware grouping. One outage pages one person — not the entire on-call rotation.",
  },
  {
    icon: GitBranch,
    title: "Deploy-aware timelines",
    body: "Ember lines incidents up against your deploys, so the first question in the retro answers itself before anyone opens a dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "Status pages included",
    body: "A branded public status page on your own domain, updated from the same signal that drives your alerts. No second tool to keep in sync.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to catch it early"
          sub="Monitoring is only useful if it reaches the right person with enough context to act. Ember is built around that last mile."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2" gap={0.09}>
          {FEATURES.map((f) => (
            <StaggerItem key={f.title}>
              <SpotlightCard className="h-full p-6">
                <f.icon className="size-5 text-brand" aria-hidden />
                <h3 className="mt-4 text-lg font-medium tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
