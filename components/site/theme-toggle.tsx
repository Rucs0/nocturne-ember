"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const emptySubscribe = () => () => {};

/** Light/dark toggle. Renders a stable placeholder until hydration so the
 *  server and client markup always match. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // true on the client, false during SSR — hydration-safe without an effect.
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {mounted && resolvedTheme === "dark" ? (
        <SunIcon className="size-4.5" />
      ) : (
        <MoonIcon className="size-4.5" />
      )}
    </Button>
  );
}
