"use client";

import { useState, type FormEvent } from "react";
import { Calendar, LoaderCircle, Phone, ShieldCheck } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { SuccessState } from "@/components/ui/success-state";
import { submitConsultation } from "@/services/submission-service";
import type { FormStatus } from "@/types/api";
import type { Contact, ConsultationContent } from "@/types/content";

interface ConsultationModalProps {
  content: ConsultationContent;
  contact: Contact;
  onClose: () => void;
}

export function ConsultationModal({ content, contact, onClose }: ConsultationModalProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const isSubmitting = status === "submitting";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setStatus("submitting");

    try {
      await submitConsultation({
        fullName: String(formData.get("fullName")).trim(),
        contact: String(formData.get("contact")).trim(),
        concern: String(formData.get("concern")),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <Modal label={content.successTitle} onClose={onClose}>
        <SuccessState title={content.successTitle} message={content.successMessage}>
          <button type="button" onClick={onClose} className="btn btn-primary w-full">
            {content.doneLabel}
          </button>
        </SuccessState>
      </Modal>
    );
  }

  return (
    <Modal label={content.title} onClose={onClose}>
      <span className="badge badge-sage mb-4">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-olive" />
        {content.badge}
      </span>
      <h3 className="mb-2 text-xl font-bold leading-tight text-ink">{content.title}</h3>
      <p className="mb-6 text-xs leading-relaxed text-muted">{content.subtitle}</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-1.5 text-xs font-semibold text-ink">
          {content.nameLabel}
          <input
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder={content.namePlaceholder}
            className="field"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-xs font-semibold text-ink">
          {content.contactLabel}
          <input
            name="contact"
            type="text"
            required
            autoComplete="tel"
            placeholder={content.contactPlaceholder}
            className="field"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-xs font-semibold text-ink">
          {content.concernLabel}
          <select name="concern" defaultValue={content.concerns[0]} className="field">
            {content.concerns.map((concern) => (
              <option key={concern} value={concern}>
                {concern}
              </option>
            ))}
          </select>
        </label>

        {status === "error" && (
          <p role="alert" className="text-xs font-medium text-danger">
            {content.errorMessage}
          </p>
        )}

        <button type="submit" disabled={isSubmitting} className="btn btn-primary mt-1 w-full">
          {isSubmitting ? (
            <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
          ) : (
            <Calendar aria-hidden="true" className="size-4" />
          )}
          <span>{isSubmitting ? content.submittingLabel : content.submitLabel}</span>
        </button>

        <div className="flex items-center justify-between border-t border-surface pt-3 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <ShieldCheck aria-hidden="true" className="size-3.5 text-success" />
            {content.confidentialityNote}
          </span>
          <a
            href={`tel:${contact.phoneRaw}`}
            className="flex items-center gap-1 font-semibold text-ink transition-colors hover:text-olive"
          >
            <Phone aria-hidden="true" className="size-3 text-olive" />
            {contact.phoneDisplay}
          </a>
        </div>
      </form>
    </Modal>
  );
}

