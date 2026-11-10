import { Icon } from "@/components/ui/icon";
import type { ValueAssurance } from "@/types/content";

interface ValueAssurancesProps {
  items: ValueAssurance[];
}

export function ValueAssurances({ items }: ValueAssurancesProps) {
  return (
    <section className="border-t border-line py-14 md:py-20">
      <div className="container-page grid grid-cols-1 gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.id} className="card p-6">
            <div className="mb-5 flex size-10 items-center justify-center rounded-xl border border-line text-muted">
              <Icon name={item.iconName} className="size-5" />
            </div>
            <h3 className="mb-2.5 text-base font-bold leading-snug text-ink">{item.title}</h3>
            <p className="text-xs leading-relaxed text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

