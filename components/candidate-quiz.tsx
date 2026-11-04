"use client";

import { useState } from "react";
import { QuizQuestion } from "@/types";
import { CheckCircle2, SquareCheck, AlertTriangle, Activity, FileCheck, Scan, ClipboardCheck, ShieldCheck } from "lucide-react";

interface CandidateQuizProps {
  badge: string;
  title: string;
  subtitle: string;
  questions: QuizQuestion[];
  privacyNotice: string;
}

export function CandidateQuiz({
  badge,
  title,
  subtitle,
  questions,
  privacyNotice,
}: CandidateQuizProps) {
  const [selectedSituation, setSelectedSituation] = useState("compromised-teeth");
  const [selectedScan, setSelectedScan] = useState("has-scan");
  const [fullName, setFullName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const getOptionIcon = (iconName: string) => {
    switch (iconName) {
      case "SquareCheck":
        return <SquareCheck className="w-5 h-5" />;
      case "AlertTriangle":
        return <AlertTriangle className="w-5 h-5" />;
      case "Activity":
        return <Activity className="w-5 h-5" />;
      case "FileCheck":
        return <FileCheck className="w-5 h-5" />;
      case "Scan":
        return <Scan className="w-5 h-5" />;
      default:
        return <SquareCheck className="w-5 h-5" />;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactInfo.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 md:py-24 border-t border-[#dddcd6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#ffffff] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#dddcd6] shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="pill-badge-sage mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3d493a]" />
              <span>{badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1c19] mb-3 leading-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5e665a] leading-relaxed">
              {subtitle}
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#f5f3ed] rounded-2xl p-8 sm:p-10 text-center border border-[#dddcd6]">
              <div className="w-14 h-14 rounded-full bg-[#c8d7c4] text-[#1a1c19] flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1c19] mb-3">
                Preliminary Evaluation Received
              </h3>
              <p className="text-sm text-[#5e665a] max-w-md mx-auto mb-6">
                Thank you, {fullName || "valued patient"}. Dr. Bocharov&apos;s surgical coordinator will review your profile and contact you at {contactInfo} with a customized 3D immediate loading protocol.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFullName(""); setContactInfo(""); }}
                type="button"
                className="btn-secondary text-sm py-2.5 px-6"
              >
                Modify Answers
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#1a1c19] mb-4">
                  <span className="w-6 h-6 rounded-full bg-[#efeee8] text-[0.6875rem] flex items-center justify-center font-bold border border-[#dddcd6]">
                    1
                  </span>
                  <span>{questions[0]?.question}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {questions[0]?.options.map((option) => {
                    const isSelected = selectedSituation === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setSelectedSituation(option.id)}
                        className={`p-4 rounded-xl border text-left transition-all flex flex-col gap-3 ${
                          isSelected
                            ? "bg-[#efeee8] border-[#3d493a]"
                            : "bg-[#f5f3ed] border-[#dddcd6] hover:border-[#c8ccc2]"
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isSelected ? "bg-[#3d493a] text-[#f5f3ed]" : "bg-[#ffffff] text-[#5e665a] border border-[#dddcd6]"
                        }`}>
                          {getOptionIcon(option.iconName)}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#1a1c19] mb-0.5 leading-snug">
                            {option.title}
                          </div>
                          <div className="text-[0.6875rem] text-[#5e665a]">
                            {option.subtitle}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#1a1c19] mb-4">
                  <span className="w-6 h-6 rounded-full bg-[#efeee8] text-[0.6875rem] flex items-center justify-center font-bold border border-[#dddcd6]">
                    2
                  </span>
                  <span>{questions[1]?.question}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {questions[1]?.options.map((option) => {
                    const isSelected = selectedScan === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setSelectedScan(option.id)}
                        className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                          isSelected
                            ? "bg-[#2a3028] border-[#2a3028] text-[#f5f3ed]"
                            : "bg-[#f5f3ed] border-[#dddcd6] hover:border-[#c8ccc2] text-[#1a1c19]"
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected ? "bg-[#ffffff]/15 text-[#f5f3ed]" : "bg-[#ffffff] text-[#5e665a] border border-[#dddcd6]"
                        }`}>
                          {getOptionIcon(option.iconName)}
                        </div>
                        <div>
                          <div className={`text-xs font-bold mb-0.5 leading-snug ${isSelected ? "text-[#f5f3ed]" : "text-[#1a1c19]"}`}>
                            {option.title}
                          </div>
                          <div className={`text-[0.6875rem] ${isSelected ? "text-neutral-400" : "text-[#5e665a]"}`}>
                            {option.subtitle}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#1a1c19] mb-4">
                  <span className="w-6 h-6 rounded-full bg-[#efeee8] text-[0.6875rem] flex items-center justify-center font-bold border border-[#dddcd6]">
                    3
                  </span>
                  <span>Where should Dr. Bocharov&apos;s coordinator send your surgical calculation?</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  <div className="sm:col-span-4">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full h-11 px-4 rounded-xl bg-[#2a3028] text-sm text-[#f5f3ed] placeholder-[#8a9186] border border-[#3d493a] focus:outline-none focus:border-[#5e665a]"
                    />
                  </div>
                  <div className="sm:col-span-4">
                    <input
                      type="text"
                      required
                      placeholder="+1 (___) ___ ____"
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      className="w-full h-11 px-4 rounded-xl bg-[#2a3028] text-sm text-[#f5f3ed] placeholder-[#8a9186] border border-[#3d493a] focus:outline-none focus:border-[#5e665a]"
                    />
                  </div>
                  <div className="sm:col-span-4">
                    <button
                      type="submit"
                      className="btn-secondary w-full h-11 text-sm font-semibold"
                    >
                      <ClipboardCheck className="w-4 h-4" />
                      <span>Get Clinical Plan</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-[0.6875rem] text-[#8a9186] mt-4 text-center">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>{privacyNotice}</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
