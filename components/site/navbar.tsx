"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { Logo } from "@/components/site/logo";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          // 3-column grid rather than justify-between: the actions group is
          // wider than the logo, so space-between left the nav sitting left of
          // true centre. Equal 1fr side tracks centre it whatever flanks it.
          "mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 transition-all duration-300 sm:px-6",
          scrolled && "mt-3 h-14 max-w-4xl rounded-2xl glass px-4 shadow-lg shadow-black/5",
        )}
      >
        <div className="justify-self-start">
          <Logo />
        </div>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 justify-self-end">
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Link href={site.cta.secondary.href}>{site.cta.secondary.label}</Link>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href={site.cta.primary.href}>{site.cta.primary.label}</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="glass mx-4 mt-2 rounded-2xl p-3 shadow-xl shadow-black/10 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2 border-t pt-3">
              <Button asChild variant="outline" size="sm" className="flex-1">
                <Link href={site.cta.secondary.href} onClick={() => setOpen(false)}>
                  {site.cta.secondary.label}
                </Link>
              </Button>
              <Button asChild size="sm" className="flex-1">
                <Link href={site.cta.primary.href} onClick={() => setOpen(false)}>
                  {site.cta.primary.label}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
