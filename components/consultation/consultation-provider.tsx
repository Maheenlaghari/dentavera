"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { ConsultationModal } from "@/components/consultation/consultation-modal";
import type { Contact, ConsultationContent } from "@/types/content";

interface ConsultationContextValue {
  openConsultation: () => void;
}

const ConsultationContext = createContext<ConsultationContextValue | null>(null);

interface ConsultationProviderProps {
  content: ConsultationContent;
  contact: Contact;
  children: ReactNode;
}

export function ConsultationProvider({ content, contact, children }: ConsultationProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openConsultation = useCallback(() => setIsOpen(true), []);
  const closeConsultation = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ openConsultation }), [openConsultation]);

  return (
    <ConsultationContext value={value}>
      {children}
      {isOpen && (
        <ConsultationModal content={content} contact={contact} onClose={closeConsultation} />
      )}
    </ConsultationContext>
  );
}

export function useConsultation(): ConsultationContextValue {
  const context = useContext(ConsultationContext);

  if (!context) {
    throw new Error("useConsultation must be used inside ConsultationProvider");
  }

  return context;
}

