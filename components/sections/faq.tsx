import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

const FAQS = [
  {
    q: "How fast will I actually hear about an outage?",
    a: "Team plans check every 10 seconds from 14 regions. A hard failure pages you in under 30 seconds; a slow degradation trips once it clears your latency threshold twice in a row, which keeps a single blip from waking anyone.",
  },
  {
    q: "Do you charge per seat?",
    a: "No. Pricing is per monitor and per check interval. Invite your whole team, your contractors, and the founder who likes dashboards — the bill doesn't move.",
  },
  {
    q: "Can I monitor things behind a VPN?",
    a: "On Business, yes. Private regions run a lightweight agent inside your network and report back over an outbound-only connection, so nothing needs to be exposed publicly.",
  },
  {
    q: "What happens when Ember itself goes down?",
    a: "Alerting runs from a separate cluster to the dashboard, and heartbeat monitors fail open — if we can't reach you, you get notified through your backup channel. Our own status page runs on a different provider on purpose.",
  },
  {
    q: "Is there a free plan or just a trial?",
    a: "Both. Hobby is free forever for 3 monitors, and Team has a 14-day trial that doesn't ask for a card. Most people start on Hobby and upgrade the first time an incident costs them a weekend.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="The questions we actually get asked"
          sub="If yours isn't here, the answer is probably yes — ask us."
        />

        <Reveal delay={0.1} className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
