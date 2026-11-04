"use client";

import { ValueAssuranceItem } from "@/types";
import { ShieldCheck, RefreshCw, Moon } from "lucide-react";

interface ValueAssurancesProps {
  items: ValueAssuranceItem[];
}

export function ValueAssurances({ items }: ValueAssurancesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5" />;
      case "RefreshCw":
        return <RefreshCw className="w-5 h-5" />;
      case "Moon":
        return <Moon className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-14 md:py-20 border-t border-[#dddcd6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#ffffff] rounded-2xl p-6 border border-[#dddcd6] flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-xl border border-[#dddcd6] flex items-center justify-center mb-5 text-[#5e665a]">
                {getIcon(item.iconName)}
              </div>
              <h3 className="text-base font-bold text-[#1a1c19] mb-2.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-[#5e665a] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
