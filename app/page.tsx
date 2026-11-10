import { ConsultationProvider } from "@/components/consultation/consultation-provider";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ArchDiagnostics } from "@/components/sections/arch-diagnostics";
import { CandidateQuiz } from "@/components/sections/candidate-quiz";
import { ClinicalConditions } from "@/components/sections/clinical-conditions";
import { Hero } from "@/components/sections/hero";
import { ImplantSolutions } from "@/components/sections/implant-solutions";
import { Reviews } from "@/components/sections/reviews";
import { ValueAssurances } from "@/components/sections/value-assurances";
import { getReviews, getSiteContent } from "@/services/content-service";

export default async function HomePage() {
  const [content, reviews] = await Promise.all([getSiteContent(), getReviews()]);

  return (
    <ConsultationProvider content={content.consultation} contact={content.contact}>
      <div className="flex min-h-screen flex-col">
        <Header brand={content.brand} contact={content.contact} content={content.header} />

        <main className="flex-1">
          <Hero doctor={content.doctor} contact={content.contact} />
          <ClinicalConditions content={content.clinicalConditions} />
          <ImplantSolutions content={content.implantSolutions} />
          <ArchDiagnostics content={content.archDiagnostics} />
          <CandidateQuiz content={content.candidateQuiz} />
          <Reviews content={content.reviews} reviews={reviews} />
          <ValueAssurances items={content.valueAssurances} />
        </main>

        <Footer brand={content.brand} contact={content.contact} content={content.footer} />
      </div>
    </ConsultationProvider>
  );
}
