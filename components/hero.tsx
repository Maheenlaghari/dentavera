"use client";

import Image from "next/image";
import { DoctorProfile } from "@/types";
import { ArrowRight, Phone, ShieldCheck, Award, Activity } from "lucide-react";

interface HeroProps {
  doctor: DoctorProfile;
  onRequestConsultation: () => void;
}

export function Hero({ doctor, onRequestConsultation }: HeroProps) {
  return (
    <section id="doctor" className="pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="flex flex-col items-start pt-4">
            <div className="pill-badge-sage mb-8 animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3d493a]" />
              <span>{doctor.titleBadge}</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-[#1a1c19] leading-[1.05] mb-6 animate-fade-in-up delay-100">
              {doctor.name}
            </h1>

            <p className="text-base sm:text-lg text-[#5e665a] leading-relaxed max-w-md mb-10 animate-fade-in-up delay-200">
              {doctor.subheadline}
            </p>

            <div className="flex gap-12 pb-8 mb-8 border-b border-[#dddcd6] w-full max-w-md animate-fade-in-up delay-300">
              <div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-4xl sm:text-5xl font-bold text-[#1a1c19] tracking-tight">
                    {doctor.experienceYears}
                  </span>
                  <span className="text-2xl font-bold text-[#5e665a]">+</span>
                </div>
                <div className="text-xs text-[#5e665a] leading-snug mt-1 max-w-[140px]">
                  {doctor.experienceLabel}
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-4xl sm:text-5xl font-bold text-[#1a1c19] tracking-tight">
                    {doctor.annualSurgeries}
                  </span>
                  <span className="text-2xl font-bold text-[#5e665a]">+</span>
                </div>
                <div className="text-xs text-[#5e665a] leading-snug mt-1 max-w-[140px]">
                  {doctor.annualSurgeriesLabel}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-8 animate-fade-in-up delay-400">
              <button
                onClick={onRequestConsultation}
                type="button"
                className="btn-primary py-3.5 px-6"
              >
                <span>Request Case Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${doctor.phoneRaw}`}
                className="btn-secondary py-3.5 px-6"
              >
                <Phone className="w-4 h-4 text-[#3d493a]" />
                <span>{doctor.phoneDisplay}</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#5e665a] animate-fade-in-up delay-400">
              <ShieldCheck className="w-4 h-4 text-[#5e665a] shrink-0" />
              <span>{doctor.protocolVerification}</span>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-full max-w-lg aspect-[4/5] rounded-3xl overflow-hidden bg-[#e8e6df] border border-[#dddcd6] shadow-md group transition-all duration-500 hover:shadow-xl">
              <Image
                src={doctor.photoUrl}
                alt={doctor.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
              />

              <div className="absolute top-4 left-1/2 -translate-x-1/2 animate-gentle-float">
                <div className="pill-badge-dark shadow-lg">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{doctor.partnerBadge}</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="bg-[#ffffff]/92 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="text-[0.6rem] font-bold tracking-widest uppercase text-[#5e665a] mb-1">
                    {doctor.role}
                  </div>
                  <div className="text-sm font-bold text-[#1a1c19] leading-tight mb-0.5">
                    {doctor.credentials}
                  </div>
                  <div className="text-[0.6875rem] text-[#5e665a]">
                    International Speaker in Guided Surgery
                  </div>
                </div>

                <div className="bg-[#1a1c19]/92 backdrop-blur-md rounded-2xl p-4 border border-white/8 text-[#f5f3ed] shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center gap-1.5 text-[0.6rem] font-bold tracking-widest uppercase text-emerald-400 mb-1">
                    <Activity className="w-3 h-3" />
                    <span>{doctor.performanceBadge}</span>
                  </div>
                  <div className="text-xs font-semibold leading-tight text-neutral-200 mb-0.5">
                    {doctor.successRate}
                  </div>
                  <div className="text-[0.6875rem] text-neutral-400">
                    {doctor.restoredArchesCount}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
