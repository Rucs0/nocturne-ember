import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/** Wordmark with a gradient compass mark — pure CSS, no image assets.
 *  Swap this component for your own logo. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 text-lg font-semibold tracking-tight", className)}
    >
      <span
        aria-hidden
        className="grid size-6 place-items-center rounded-md"
        style={{
          backgroundImage: "linear-gradient(135deg, var(--brand), var(--brand-3))",
        }}
      >
        <span className="block size-2 rotate-45 rounded-[2px] bg-white/90" />
      </span>
      <span className="font-display">{site.name}</span>
    </Link>
  );
}
