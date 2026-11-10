"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ClinicalCondition, ClinicalConditionsContent } from "@/types/content";

const SCROLL_STEP_PX = 320;

interface ClinicalConditionsProps {
  content: ClinicalConditionsContent;
}

export function ClinicalConditions({ content }: ClinicalConditionsProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<ClinicalCondition | null>(null);

  const closeDetail = useCallback(() => setSelected(null), []);

  const scrollTrack = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({ left: direction * SCROLL_STEP_PX, behavior: "smooth" });
  };

  return (
    <section id="cases" className="border-t border-line py-16 md:py-24">
      <div className="container-page">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading badge={content.badge} title={content.title} subtitle={content.subtitle} />
          <div className="flex gap-2">
            <button type="button" onClick={() => scrollTrack(-1)} aria-label="Previous" className="btn-icon">
              <ChevronLeft aria-hidden="true" className="size-4" />
            </button>
            <button type="button" onClick={() => scrollTrack(1)} aria-label="Next" className="btn-icon">
              <ChevronRight aria-hidden="true" className="size-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pt-1 [scrollbar-width:none]"
        >
          {content.items.map((item) => (
            <article
              key={item.id}
              className="group flex min-w-64 flex-1 snap-start flex-col justify-between rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-line-strong sm:min-w-72"
            >
              <div>
                <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-xl bg-surface-strong">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 80vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <button
                    type="button"
                    onClick={() => setSelected(item)}
                    aria-label={item.title}
                    className="absolute right-2.5 top-2.5 flex size-7 cursor-pointer items-center justify-center rounded-full border border-line bg-card/90 text-ink backdrop-blur-sm transition-colors hover:bg-card"
                  >
                    <ExternalLink aria-hidden="true" className="size-3" />
                  </button>
                </div>
                <p className="mb-2 text-micro font-bold uppercase tracking-label text-muted">{item.category}</p>
                <h3 className="mb-2 text-base font-bold leading-snug text-ink">{item.title}</h3>
                <p className="mb-5 line-clamp-3 text-xs leading-relaxed text-muted">{item.description}</p>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs">
                <span className="font-medium text-muted">{item.metricLabel}</span>
                <span className="font-bold text-ink">{item.metricValue}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <Modal label={selected.title} onClose={closeDetail}>
          <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-2xl border border-line bg-surface">
            <Image src={selected.imageUrl} alt={selected.title} fill sizes="512px" className="object-cover" />
          </div>
          <span className="badge badge-light mb-3">{selected.category}</span>
          <h3 className="mb-3 text-xl font-bold text-ink">{selected.title}</h3>
          <p className="mb-6 text-sm leading-relaxed text-muted">{selected.description}</p>
          <div className="mb-6 flex items-center justify-between rounded-2xl border border-line bg-canvas p-4 text-sm">
            <span className="font-medium text-muted">{selected.metricLabel}</span>
            <span className="font-bold text-ink">{selected.metricValue}</span>
          </div>
          <button type="button" onClick={closeDetail} className="btn btn-primary w-full">
            {content.closeLabel}
          </button>
        </Modal>
      )}
    </section>
  );
}

