"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Info } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ImplantSolutionsContent } from "@/types/content";

interface ImplantSolutionsProps {
  content: ImplantSolutionsContent;
}

export function ImplantSolutions({ content }: ImplantSolutionsProps) {
  const { model } = content;
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);

  const toggleHotspot = (id: string) => {
    setActiveHotspotId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section id="technologies" className="border-t border-line py-16 md:py-24">
      <div className="container-page">
        <div className="mb-14">
          <SectionHeading
            badge={content.badge}
            title={content.title}
            subtitle={content.subtitle}
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          <div className="card flex flex-col p-5 sm:p-6 lg:col-span-7">
            <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink">
                <span aria-hidden="true" className="size-2 rounded-full bg-highlight" />
                {model.title}
              </p>
              <span className="badge border-line bg-surface text-micro text-muted">{model.accuracy}</span>
            </div>

            <div className="relative mb-5 aspect-4/3 w-full overflow-hidden rounded-xl border border-line bg-surface">
              <Image
                src={model.imageUrl}
                alt={model.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain p-3"
              />
              {model.hotspots.map((spot) => (
                <div
                  key={spot.id}
                  style={{ top: spot.top, left: spot.left }}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                >
                  <button
                    type="button"
                    onClick={() => toggleHotspot(spot.id)}
                    aria-expanded={activeHotspotId === spot.id}
                    aria-label={spot.label}
                    className="flex size-5 cursor-pointer items-center justify-center rounded-full border-2 border-card bg-ink text-on-dark shadow-md transition-transform hover:scale-110"
                  >
                    <Info aria-hidden="true" className="size-2.5" />
                  </button>
                  {activeHotspotId === spot.id && (
                    <div className="absolute left-7 top-1/2 z-20 w-44 -translate-y-1/2 animate-fade-in rounded-xl border border-white/10 bg-ink/95 p-3 text-left shadow-xl backdrop-blur-md">
                      <p className="mb-0.5 text-tiny font-bold text-highlight">{spot.label}</p>
                      <p className="text-micro leading-normal text-on-dark-muted">{spot.detail}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <dl className="grid grid-cols-3 gap-3 rounded-xl border border-line bg-canvas p-4">
              {model.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col-reverse text-center">
                  <dt className="text-micro font-medium tracking-wide text-muted">{metric.label}</dt>
                  <dd className="mb-0.5 text-sm font-bold text-ink">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5">
            {content.items.map((item) => (
              <article
                key={item.id}
                className="card p-5 transition-colors hover:border-line-strong sm:p-6"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full border border-line bg-surface text-xs font-bold text-ink">
                    {item.index}
                  </span>
                  <span className="text-micro font-bold uppercase tracking-label text-muted">{item.badge}</span>
                </div>
                <h3 className="mb-2.5 text-base font-bold leading-snug text-ink">{item.title}</h3>
                <p className="mb-4 text-xs leading-relaxed text-muted">{item.description}</p>
                <p className="flex items-start gap-2 border-t border-surface pt-3 text-xs font-medium text-ink">
                  <Check aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-success" />
                  {item.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

