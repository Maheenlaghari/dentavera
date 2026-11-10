import { ArrowRight, ThumbsUp } from "lucide-react";
import { ConsultationButton } from "@/components/consultation/consultation-button";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ArchDiagnosticsContent } from "@/types/content";

interface ArchDiagnosticsProps {
  content: ArchDiagnosticsContent;
}

export function ArchDiagnostics({ content }: ArchDiagnosticsProps) {
  return (
    <section id="solutions" className="border-t border-line py-16 md:py-24">
      <div className="container-page">
        <div className="rounded-3xl border border-line bg-surface p-6 sm:p-10 lg:p-14">
          <div className="mb-12">
            <SectionHeading badge={content.badge} title={content.title} subtitle={content.subtitle} />
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.items.map((item) => (
              <article key={item.id} className="card flex flex-col justify-between p-5">
                <div>
                  <div className="mb-5 flex size-10 items-center justify-center rounded-xl border border-line text-muted">
                    <Icon name={item.iconName} className="size-5" />
                  </div>
                  <h3 className="mb-2 text-sm font-bold leading-snug text-ink">{item.title}</h3>
                  <p className="mb-5 text-xs leading-relaxed text-muted">{item.description}</p>
                </div>
                <p className="border-t border-surface pt-3 text-micro font-bold uppercase tracking-label text-olive">
                  {item.badge}
                </p>
              </article>
            ))}
          </div>

          <div className="card flex flex-col justify-between gap-5 p-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-olive text-on-dark">
                <ThumbsUp aria-hidden="true" className="size-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-ink">{content.guaranteeTitle}</p>
                <p className="text-xs text-muted">{content.guaranteeDescription}</p>
              </div>
            </div>
            <ConsultationButton className="btn btn-secondary shrink-0 self-start sm:self-auto">
              {content.actionLabel}
              <ArrowRight aria-hidden="true" className="size-4" />
            </ConsultationButton>
          </div>
        </div>
      </div>
    </section>
  );
}

