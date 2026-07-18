import { Marquee } from "@/components/motion/marquee";

/* Fictional customers for the demo. Replace with your own — or delete the
   whole section if you'd rather not claim social proof you don't have. */
const COMPANIES = [
  "Halcyon",
  "Tidewater",
  "Norlight",
  "Brambleworks",
  "Cinder & Co.",
  "Fathomline",
  "Ironwood",
  "Saltmarsh",
];

export function Logos() {
  return (
    <section className="border-y bg-muted/25 py-12">
      <p className="mb-8 text-center text-sm text-muted-foreground">
        Trusted by teams who ship on Fridays
      </p>
      <Marquee duration={38}>
        {COMPANIES.map((name) => (
          <span
            key={name}
            className="font-display px-5 text-xl font-medium tracking-tight text-muted-foreground/55 transition-colors hover:text-foreground"
          >
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
