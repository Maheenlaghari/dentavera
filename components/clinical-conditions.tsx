"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ClinicalCondition } from "@/types";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";

interface ClinicalConditionsProps {
  conditions: ClinicalCondition[];
  onSelectCondition?: (condition: ClinicalCondition) => void;
}

export function ClinicalConditions({
  conditions,
  onSelectCondition,
}: ClinicalConditionsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeModalItem, setActiveModalItem] = useState<ClinicalCondition | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const handleOpenDetail = (condition: ClinicalCondition) => {
    setActiveModalItem(condition);
    if (onSelectCondition) {
      onSelectCondition(condition);
    }
  };

  return (
    <section id="cases" className="py-16 md:py-24 border-t border-[#dddcd6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="pill-badge-sage mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3d493a]" />
              <span>PATHOLOGIES & INTERVENTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1c19] mb-4">
              Clinical Conditions We Resolve Daily
            </h2>
            <p className="text-sm text-[#5e665a] leading-relaxed max-w-lg">
              Every clinical case undergoes comprehensive 3D volumetric planning to eliminate complications before the patient enters the operating suite.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={() => scroll("left")}
              type="button"
              aria-label="Previous conditions"
              className="w-10 h-10 rounded-full bg-[#efeee8] hover:bg-[#e8e6df] border border-[#dddcd6] flex items-center justify-center text-[#1a1c19] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              type="button"
              aria-label="Next conditions"
              className="w-10 h-10 rounded-full bg-[#efeee8] hover:bg-[#e8e6df] border border-[#dddcd6] flex items-center justify-center text-[#1a1c19] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {conditions.map((item) => (
            <div
              key={item.id}
              className="min-w-[260px] sm:min-w-[280px] lg:min-w-[270px] xl:min-w-[280px] flex-1 bg-[#efeee8] rounded-2xl p-4 border border-[#dddcd6] hover:border-[#c8ccc2] transition-all flex flex-col justify-between group snap-start"
            >
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#e8e6df] mb-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 80vw, 25vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <button
                    onClick={() => handleOpenDetail(item)}
                    type="button"
                    aria-label={`View clinical details for ${item.title}`}
                    className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-[#ffffff]/90 backdrop-blur-sm border border-[#dddcd6] flex items-center justify-center text-[#1a1c19] hover:bg-[#ffffff] transition-all"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                <div className="text-[0.625rem] font-bold tracking-[0.1em] text-[#5e665a] uppercase mb-2">
                  {item.category}
                </div>

                <h3 className="text-[0.9375rem] font-bold text-[#1a1c19] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-[0.75rem] text-[#5e665a] leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              <div className="bg-[#ffffff] rounded-xl px-3.5 py-2.5 flex items-center justify-between text-xs border border-[#dddcd6]">
                <span className="text-[#5e665a] font-medium">{item.metricLabel}</span>
                <span className="text-[#1a1c19] font-bold">{item.metricValue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveModalItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in cursor-pointer transition-all duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#ffffff] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#dddcd6] shadow-2xl relative animate-modal-pop cursor-default"
          >
            <button
              onClick={() => setActiveModalItem(null)}
              type="button"
              aria-label="Close dialog"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#efeee8] flex items-center justify-center text-[#1a1c19] hover:bg-[#e8e6df] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#efeee8] mb-5 border border-[#dddcd6]">
              <Image
                src={activeModalItem.imageUrl}
                alt={activeModalItem.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="pill-badge mb-3">
              <span>{activeModalItem.category}</span>
            </div>

            <h3 className="text-xl font-bold text-[#1a1c19] mb-3">
              {activeModalItem.title}
            </h3>

            <p className="text-sm text-[#5e665a] leading-relaxed mb-6">
              {activeModalItem.description}
            </p>

            <div className="bg-[#f5f3ed] rounded-2xl p-4 border border-[#dddcd6] flex items-center justify-between text-sm mb-6">
              <span className="text-[#5e665a] font-medium">{activeModalItem.metricLabel}</span>
              <span className="text-[#1a1c19] font-bold">{activeModalItem.metricValue}</span>
            </div>

            <button
              onClick={() => setActiveModalItem(null)}
              type="button"
              className="btn-primary w-full py-3 text-sm"
            >
              Close Diagnostic View
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
