import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Logos } from "@/components/sections/logos";
import { Pricing } from "@/components/sections/pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Features />
      <Pricing />
      <Faq />
      <Cta />
    </>
  );
}
