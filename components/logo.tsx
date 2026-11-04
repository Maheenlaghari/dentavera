"use client";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export function Logo({ className = "h-9 w-auto", showSubtitle = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <svg
        viewBox="0 0 110 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto shrink-0"
        aria-hidden="true"
      >
        <path
          d="M32 18 C38 15 48 15 54 20 C60 15 70 15 76 18 C83 22 84 31 82 40 C80 47 79 53 80 62 C81 72 77 82 72 86 C68 89 63 87 60 79 C57 71 55 65 54 65 C53 65 51 71 48 79 C45 87 40 89 36 86 C31 82 27 72 28 62 C29 53 28 47 26 40 C24 31 25 22 32 18 Z"
          stroke="#587964"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38 52 C52 56 68 53 86 42"
          stroke="#587964"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M87 13 C87 18 90 22 95 22 C90 22 87 26 87 31 C87 26 84 22 79 22 C84 22 87 18 87 13 Z"
          fill="#587964"
        />
      </svg>

      <div className="flex flex-col justify-center leading-none">
        <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#161f28]">
          DentaVera
        </span>
        {showSubtitle && (
          <span className="text-[0.625rem] sm:text-[0.6875rem] font-bold tracking-[0.22em] text-[#587964] uppercase mt-1">
            DENTAL CARE
          </span>
        )}
      </div>
    </div>
  );
}

