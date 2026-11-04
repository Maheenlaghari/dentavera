"use client";

import { useState, useEffect, useCallback } from "react";
import { X, CheckCircle2, Calendar, Phone, ShieldCheck } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneDisplay: string;
  phoneRaw: string;
}

export function ConsultationModal({
  isOpen,
  onClose,
  phoneDisplay,
  phoneRaw,
}: ConsultationModalProps) {
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [procedure, setProcedure] = useState("All on 4 / All on 6 Total Restoration");
  const [submitted, setSubmitted] = useState(false);

  const handleReset = useCallback(() => {
    setSubmitted(false);
    setFullName("");
    setContact("");
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleReset();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleReset]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName.trim() && contact.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={handleReset}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in cursor-pointer transition-all duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#ffffff] rounded-3xl max-w-lg w-full p-6 sm:p-10 border border-[#dddcd6] shadow-2xl relative animate-modal-pop cursor-default"
      >
        <button
          onClick={handleReset}
          type="button"
          aria-label="Close dialog"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#efeee8] flex items-center justify-center text-[#1a1c19] hover:bg-[#e8e6df] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[#c8d7c4] text-[#1a1c19] flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-[#1a1c19] mb-3">
              Consultation Scheduled
            </h3>
            <p className="text-sm text-[#5e665a] mb-6 leading-relaxed">
              Dr. Bocharov&apos;s coordinator has received your request for {procedure}. We will reach out to you at {contact} to confirm your appointment time and tomography preparation details.
            </p>
            <button onClick={handleReset} type="button" className="btn-primary w-full py-3 text-sm">
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="pill-badge-sage mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3d493a]" />
              <span>CASE CONSULTATION REQUEST</span>
            </div>
            <h3 className="text-xl font-bold text-[#1a1c19] mb-2 leading-tight">
              Request Case Consultation
            </h3>
            <p className="text-xs text-[#5e665a] leading-relaxed mb-6">
              Connect directly with Dr. Maxim Bocharov&apos;s clinical coordinator for anatomical evaluation and preliminary diagnostics.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1a1c19] mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl bg-[#f5f3ed] border border-[#dddcd6] text-sm text-[#1a1c19] placeholder-[#8a9186] focus:outline-none focus:border-[#3d493a]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1a1c19] mb-1.5">Phone or Email</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +1 (800) 555 DENT"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl bg-[#f5f3ed] border border-[#dddcd6] text-sm text-[#1a1c19] placeholder-[#8a9186] focus:outline-none focus:border-[#3d493a]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1a1c19] mb-1.5">Clinical Concern</label>
                <select
                  value={procedure}
                  onChange={(e) => setProcedure(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl bg-[#f5f3ed] border border-[#dddcd6] text-sm text-[#1a1c19] focus:outline-none focus:border-[#3d493a]"
                >
                  <option value="All on 4 / All on 6 Total Restoration">All on 4 / All on 6 Total Restoration</option>
                  <option value="Single Stage Immediate Implantation">Single Stage Immediate Implantation</option>
                  <option value="Severe Bone Deficit Restoration">Severe Bone Deficit Restoration</option>
                  <option value="Gingival Recession Coverage">Gingival Recession Coverage</option>
                  <option value="General Implantology Evaluation">General Implantology Evaluation</option>
                </select>
              </div>
              <button type="submit" className="btn-primary w-full py-3 text-sm mt-1">
                <Calendar className="w-4 h-4" />
                <span>Confirm Request</span>
              </button>
              <div className="pt-3 border-t border-[#efeee8] flex items-center justify-between text-xs text-[#5e665a]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#297a48]" />
                  <span>Strict Confidentiality</span>
                </div>
                <a href={`tel:${phoneRaw}`} className="flex items-center gap-1 text-[#1a1c19] font-semibold hover:text-[#3d493a]">
                  <Phone className="w-3 h-3 text-[#3d493a]" />
                  <span>{phoneDisplay}</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
