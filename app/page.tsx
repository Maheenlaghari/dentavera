"use client";

import { useState } from "react";
import { clinicData } from "@/data/clinic-data";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ClinicalConditions } from "@/components/clinical-conditions";
import { ImplantSolutions } from "@/components/implant-solutions";
import { ArchDiagnostics } from "@/components/arch-diagnostics";
import { CandidateQuiz } from "@/components/candidate-quiz";
import { ValueAssurances } from "@/components/value-assurances";
import { Footer } from "@/components/footer";
import { ConsultationModal } from "@/components/consultation-modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f5f3ed] text-[#1a1c19] flex flex-col selection:bg-[#c8d7c4]">
      <Header
        navItems={clinicData.navItems}
        phoneDisplay={clinicData.doctor.phoneDisplay}
        phoneRaw={clinicData.doctor.phoneRaw}
        onBookClick={handleOpenModal}
      />

      <main className="flex-1">
        <Hero
          doctor={clinicData.doctor}
          onRequestConsultation={handleOpenModal}
        />

        <ClinicalConditions
          conditions={clinicData.clinicalConditions}
        />

        <ImplantSolutions
          modelSpec={clinicData.navigationModel}
          solutions={clinicData.implantSolutions}
        />

        <ArchDiagnostics
          badge={clinicData.archDiagnostics.badge}
          title={clinicData.archDiagnostics.title}
          subtitle={clinicData.archDiagnostics.subtitle}
          items={clinicData.archDiagnostics.items}
          guaranteeTitle={clinicData.archDiagnostics.guaranteeTitle}
          guaranteeDescription={clinicData.archDiagnostics.guaranteeDescription}
          onCalculateCost={handleOpenModal}
        />

        <CandidateQuiz
          badge={clinicData.candidateQuiz.badge}
          title={clinicData.candidateQuiz.title}
          subtitle={clinicData.candidateQuiz.subtitle}
          questions={clinicData.candidateQuiz.questions}
          privacyNotice={clinicData.candidateQuiz.privacyNotice}
        />

        <ValueAssurances items={clinicData.valueAssurances} />
      </main>

      <Footer data={clinicData} />

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        phoneDisplay={clinicData.doctor.phoneDisplay}
        phoneRaw={clinicData.doctor.phoneRaw}
      />
    </div>
  );
}
