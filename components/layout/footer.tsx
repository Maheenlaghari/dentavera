import { Phone, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import type { Brand, Contact, FooterContent } from "@/types/content";

interface FooterProps {
  brand: Brand;
  contact: Contact;
  content: FooterContent;
}

export function Footer({ brand, contact, content }: FooterProps) {
  return (
    <footer id="contact" className="border-t border-line bg-surface pb-10 pt-14">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 border-b border-line pb-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col items-start lg:col-span-4">
            <a href="#" aria-label={brand.name} className="mb-4">
              <Logo brand={brand} />
            </a>
            <p className="mb-6 max-w-xs text-xs leading-relaxed text-muted">{content.description}</p>
            <ul className="flex flex-col gap-2">
              {content.badges.map((badge) => (
                <li key={badge} className="badge badge-light normal-case tracking-normal">
                  <ShieldCheck aria-hidden="true" className="size-3.5 text-success" />
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          {content.linkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title} className="lg:col-span-2">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-ink">{group.title}</h3>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs text-muted transition-colors hover:text-ink">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-4 lg:pl-10">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-ink">{content.hoursTitle}</h3>
            <ul className="mb-5 flex flex-col gap-1.5 text-xs text-muted">
              {content.hours.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="border-t border-line pt-3">
              <p className="mb-1 text-micro font-bold uppercase tracking-wider text-muted">
                {content.directLineLabel}
              </p>
              <a
                href={`tel:${contact.phoneRaw}`}
                className="flex items-center gap-2 text-base font-bold text-ink transition-colors hover:text-olive"
              >
                <Phone aria-hidden="true" className="size-4 text-olive" />
                {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-tiny text-muted md:flex-row">
          <p>&copy; {content.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="font-semibold text-ink">{content.license}</span>
            {content.legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="underline transition-colors hover:text-ink">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

