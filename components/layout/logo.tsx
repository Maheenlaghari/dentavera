import type { Brand } from "@/types/content";

interface LogoProps {
  brand: Brand;
}

export function Logo({ brand }: LogoProps) {
  return (
    <span className="flex select-none flex-col leading-tight">
      <span className="text-xl font-bold tracking-tight text-brand-ink sm:text-2xl">{brand.name}</span>
      <span className="mt-0.5 text-micro font-bold uppercase tracking-brand text-brand-green sm:text-tiny">
        {brand.tagline}
      </span>
    </span>
  );
}

