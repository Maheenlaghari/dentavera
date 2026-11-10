import Image from "next/image";
import { Activity, ArrowRight, Award, Phone, ShieldCheck } from "lucide-react";
import { ConsultationButton } from "@/components/consultation/consultation-button";
import type { Contact, DoctorProfile } from "@/types/content";

interface HeroProps {
  doctor: DoctorProfile;
  contact: Contact;
}

export function Hero({ doctor, contact }: HeroProps) {
  return (
    <section id="doctor" className="overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col items-start">
          <span className="badge badge-sage mb-8 animate-fade-in-up">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-olive" />
            {doctor.titleBadge}
          </span>

          <h1 className="mb-6 animate-fade-in-up text-5xl font-bold tracking-tight text-ink anim-delay-1 sm:text-6xl lg:text-display">
            {doctor.name}
          </h1>

          <p className="mb-10 max-w-md animate-fade-in-up text-base leading-relaxed text-muted anim-delay-2 sm:text-lg">
            {doctor.subheadline}
          </p>

          <div className="mb-8 flex w-full max-w-md animate-fade-in-up gap-12 border-b border-line pb-8 anim-delay-3">
            {doctor.stats.map((stat) => (
              <div key={stat.label}>
                <p className="flex items-baseline gap-0.5">
                  <span className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">{stat.value}</span>
                  <span className="text-3xl font-bold text-sage-strong">{stat.suffix}</span>
                </p>
                <p className="mt-1 max-w-36 text-xs leading-snug text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-8 flex animate-fade-in-up flex-wrap items-center gap-3 anim-delay-4">
            <ConsultationButton className="btn btn-primary py-3.5">
              {doctor.primaryActionLabel}
              <ArrowRight aria-hidden="true" className="btn-arrow" />
            </ConsultationButton>
            <a href={`tel:${contact.phoneRaw}`} className="btn btn-secondary py-3.5">
              <Phone aria-hidden="true" className="size-4 text-olive" />
              {contact.phoneDisplay}
            </a>
          </div>

          <p className="flex animate-fade-in-up items-center gap-2 text-xs text-muted anim-delay-4">
            <ShieldCheck aria-hidden="true" className="size-4 shrink-0" />
            {doctor.verificationNote}
          </p>
        </div>

        <div className="relative flex animate-fade-in justify-center anim-delay-2 lg:justify-end">
          <div className="group relative aspect-4/5 w-full max-w-lg overflow-hidden rounded-3xl border border-line bg-surface-strong shadow-md transition-shadow duration-500 hover:shadow-xl">
            <Image
              src={doctor.photoUrl}
              alt={doctor.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            />

            <div className="absolute left-1/2 top-4 -translate-x-1/2">
              <span className="badge badge-dark animate-float whitespace-nowrap shadow-lg">
                <Award aria-hidden="true" className="size-3.5 text-highlight" />
                {doctor.partnerBadge}
              </span>
            </div>

            <div className="absolute inset-x-4 bottom-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/40 bg-card/90 p-4 shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
                <p className="mb-1 text-micro font-bold uppercase tracking-widest text-muted">{doctor.role}</p>
                <p className="mb-0.5 text-sm font-bold leading-tight text-ink">{doctor.credentials}</p>
                <p className="text-tiny text-muted">{doctor.speakerNote}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-ink/90 p-4 text-on-dark shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
                <p className="mb-1 flex items-center gap-1.5 text-micro font-bold uppercase tracking-widest text-highlight">
                  <Activity aria-hidden="true" className="size-3" />
                  {doctor.ambassadorBadge}
                </p>
                <p className="mb-0.5 text-xs font-semibold leading-tight">{doctor.ambassadorTitle}</p>
                <p className="text-tiny text-on-dark-muted">{doctor.ambassadorNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

