import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { site } from "@/lib/site";

const columns = [
  { title: "Product", links: site.footer.product },
  { title: "Company", links: site.footer.company },
  { title: "Legal", links: site.footer.legal },
];

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-sm font-medium">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Built with{" "}
            <a
              href="https://nocturneui.com/?utm_source=ember&utm_medium=template&utm_campaign=free-starter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 underline-offset-4 transition-colors hover:text-brand hover:underline"
            >
              Ember
            </a>
            , a free Nocturne starter
          </p>
        </div>
      </div>
    </footer>
  );
}
