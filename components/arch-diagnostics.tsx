"use client";

import { ArchDiagnosticItem } from "@/types";
import { Smile, AlertCircle, Clock, ShieldAlert, ThumbsUp, ArrowRight } from "lucide-react";

interface ArchDiagnosticsProps {
  badge: string;
  title: string;
  subtitle: string;
  items: ArchDiagnosticItem[];
  guaranteeTitle: string;
  guaranteeDescription: string;
  onCalculateCost: () => void;
}

export function ArchDiagnostics({
  badge,
  title,
  subtitle,
  items,
  guaranteeTitle,
  guaranteeDescription,
  onCalculateCost,
}: ArchDiagnosticsProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "Smile":
        return <Smile className="w-5 h-5" />;
      case "AlertCircle":
        return <AlertCircle className="w-5 h-5" />;
      case "Clock":
        return <Clock className="w-5 h-5" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5" />;
      default:
        return <Smile className="w-5 h-5" />;
    }
  };

  return (
    <section id="solutions" className="py-16 md:py-24 border-t border-[#dddcd6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#efeee8] rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#dddcd6]">
          <div className="max-w-3xl mb-12">
            <div className="pill-badge-sage mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3d493a]" />
              <span>{badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#1a1c19] mb-5 leading-tight">
              {title}
            </h2>
            <p className="text-sm text-[#5e665a] leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[#ffffff] rounded-2xl p-5 border border-[#dddcd6] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl border border-[#dddcd6] flex items-center justify-center mb-5 text-[#5e665a]">
                    {getIcon(item.iconName)}
                  </div>
                  <h3 className="text-sm font-bold text-[#1a1c19] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5e665a] leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#efeee8]">
                  <span className="text-[0.625rem] font-bold tracking-[0.1em] text-[#3d493a] uppercase">
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#ffffff] rounded-2xl p-5 border border-[#dddcd6] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#3d493a] text-[#f5f3ed] flex items-center justify-center shrink-0">
                <ThumbsUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#1a1c19]">
                  {guaranteeTitle}
                </div>
                <div className="text-xs text-[#5e665a]">
                  {guaranteeDescription}
                </div>
              </div>
            </div>
            <button
              onClick={onCalculateCost}
              type="button"
              className="btn-secondary py-3 px-6 self-start sm:self-auto shrink-0 text-sm"
            >
              <span>Calculate Arch Cost</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
