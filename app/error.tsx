"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Report to your error tracker of choice (Sentry, etc.).
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-24 text-center">
      <h1 className="font-display text-3xl font-semibold tracking-tight">
        Something went sideways
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
        An unexpected error occurred. It&apos;s been logged — try again, and if it
        keeps happening, let us know.
      </p>
      <div className="mt-8 flex gap-3">
        <Button onClick={reset}>Try again</Button>
        <Button asChild variant="outline">
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </div>
  );
}
