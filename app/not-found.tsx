import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center px-4 pt-24 text-center">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <p className="text-gradient-brand font-display text-8xl font-semibold tracking-tight sm:text-9xl">
        404
      </p>
      <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight">
        This page slipped to next quarter
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
        The page you&apos;re looking for was moved, renamed, or never made it out of
        the roadmap. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <Link href="/">Back home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact us</Link>
        </Button>
      </div>
    </div>
  );
}
