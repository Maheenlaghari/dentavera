"use client";

import { useState } from "react";
import Image from "next/image";
import { ImplantSolution, NavigationModelSpec } from "@/types";
import { Check, Info } from "lucide-react";

interface ImplantSolutionsProps {
  modelSpec: NavigationModelSpec;
  solutions: ImplantSolution[];
}

export function ImplantSolutions({
  modelSpec,
  solutions,
}: ImplantSolutionsProps) {
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);

  return (
    <section id="technologies" className="py-16 md:py-24 border-t border-[#dddcd6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="pill-badge-sage mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3d493a]" />
            <span>EVIDENCE BASED PROTOCOLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#1a1c19] mb-5 leading-tight">
            Implant Solutions Tailored to Your Anatomical Reality
          </h2>
          <p className="text-sm text-[#5e665a] leading-relaxed max-w-xl mx-auto">
            We combine Swiss metallurgy with dynamic robotic grade 3D CAD/CAM navigation for predictable, painless integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 bg-[#ffffff] rounded-2xl p-5 sm:p-6 border border-[#dddcd6] flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-[#dddcd6] mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold tracking-wider uppercase text-[#1a1c19]">
                  {modelSpec.title}
                </span>
              </div>
              <div className="pill-badge bg-[#efeee8] text-[0.625rem] border-[#dddcd6]">
                <span>{modelSpec.accuracy}</span>
              </div>
            </div>

            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#efeee8] border border-[#dddcd6] mb-5">
              <Image
                src={modelSpec.imageUrl}
                alt={modelSpec.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain p-3"
              />
              {modelSpec.hotspots.map((spot) => (
                <div
                  key={spot.id}
                  style={{ top: spot.top, left: spot.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <button
                    onClick={() => setSelectedHotspot(selectedHotspot === spot.id ? null : spot.id)}
                    type="button"
                    aria-label={`Hotspot info for ${spot.label}`}
                    className="w-5 h-5 rounded-full bg-[#1a1c19] text-[#f5f3ed] flex items-center justify-center border-2 border-[#ffffff] shadow-md hover:scale-110 transition-transform"
                  >
                    <Info className="w-2.5 h-2.5" />
                  </button>
                  {selectedHotspot === spot.id && (
                    <div className="absolute left-7 top-1/2 -translate-y-1/2 w-44 bg-[#1a1c19]/95 text-[#f5f3ed] backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-xl text-left z-20">
                      <div className="text-[0.6875rem] font-bold text-emerald-400 mb-0.5">
                        {spot.label}
                      </div>
                      <div className="text-[0.625rem] text-neutral-300 leading-normal">
                        {spot.detail}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 bg-[#f5f3ed] rounded-xl p-4 border border-[#dddcd6]">
              {modelSpec.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-sm font-bold text-[#1a1c19] mb-0.5">
                    {m.value}
                  </div>
                  <div className="text-[0.5625rem] font-medium text-[#5e665a] tracking-wide">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            {solutions.map((item) => (
              <div
                key={item.id}
                className="bg-[#ffffff] rounded-2xl p-5 sm:p-6 border border-[#dddcd6] hover:border-[#c8ccc2] transition-all"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#efeee8] flex items-center justify-center text-xs font-bold text-[#1a1c19] border border-[#dddcd6]">
                    {item.index}
                  </div>
                  <span className="text-[0.625rem] font-bold tracking-[0.12em] uppercase text-[#5e665a]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#1a1c19] mb-2.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#5e665a] leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-[#efeee8] flex items-start gap-2 text-xs text-[#1a1c19] font-medium">
                  <Check className="w-3.5 h-3.5 text-[#297a48] shrink-0 mt-0.5" />
                  <span>{item.subNote}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
