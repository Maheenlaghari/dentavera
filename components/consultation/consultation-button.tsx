"use client";

import type { ReactNode } from "react";
import { useConsultation } from "@/components/consultation/consultation-provider";

interface ConsultationButtonProps {
  className: string;
  children: ReactNode;
}

export function ConsultationButton({ className, children }: ConsultationButtonProps) {
  const { openConsultation } = useConsultation();

  return (
    <button type="button" onClick={openConsultation} className={className}>
      {children}
    </button>
  );
}

