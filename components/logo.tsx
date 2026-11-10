"use client";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export function Logo({ className = "", showSubtitle = true }: LogoProps) {
  return (
    <div className={`flex flex-col justify-center leading-tight select-none ${className}`}>
      <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#161f28]">
        DentaVera
      </span>
      {showSubtitle && (
        <span className="text-[0.625rem] sm:text-[0.6875rem] font-bold tracking-[0.22em] text-[#587964] uppercase mt-0.5">
          DENTAL CARE
        </span>
      )}
    </div>
  );
}


