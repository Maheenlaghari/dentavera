import type { ReactNode } from "react";
import { CircleCheck } from "lucide-react";

interface SuccessStateProps {
  title: string;
  message: string;
  children: ReactNode;
}

export function SuccessState({ title, message, children }: SuccessStateProps) {
  return (
    <div role="status" className="py-6 text-center">
      <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-sage text-ink">
        <CircleCheck aria-hidden="true" className="size-7" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-ink">{title}</h3>
      <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-muted">{message}</p>
      {children}
    </div>
  );
}

