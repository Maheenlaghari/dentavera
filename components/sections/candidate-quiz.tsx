"use client";

import { useState, type FormEvent } from "react";
import { ClipboardCheck, LoaderCircle, ShieldCheck } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { SuccessState } from "@/components/ui/success-state";
import { submitCandidateEvaluation } from "@/services/submission-service";
import type { FormStatus } from "@/types/api";
import type { CandidateQuizContent, QuizQuestion } from "@/types/content";

const optionGridColumns: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
};

function createInitialAnswers(questions: QuizQuestion[]): Record<string, string> {
  return Object.fromEntries(questions.map((question) => [question.id, question.options[0]?.id ?? ""]));
}

interface StepLabelProps {
  step: number;
  text: string;
}

function StepLabel({ step, text }: StepLabelProps) {
  return (
    <p className="mb-4 flex items-center gap-2 text-sm font-bold text-ink">
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-tiny">
        {step}
      </span>
      {text}
    </p>
  );
}

interface CandidateQuizProps {
  content: CandidateQuizContent;
}

export function CandidateQuiz({ content }: CandidateQuizProps) {
  const [answers, setAnswers] = useState(() => createInitialAnswers(content.questions));
  const [status, setStatus] = useState<FormStatus>("idle");
  const isSubmitting = status === "submitting";

  const selectAnswer = (questionId: string, optionId: string) => {
    setAnswers((current) => ({ ...current, [questionId]: optionId }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setStatus("submitting");

    try {
      await submitCandidateEvaluation({
        fullName: String(formData.get("fullName")).trim(),
        phone: String(formData.get("phone")).trim(),
        answers,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="evaluation" className="border-t border-line py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="card rounded-3xl p-6 shadow-lg sm:p-10 lg:p-12">
          <div className="mb-10">
            <SectionHeading
              badge={content.badge}
              title={content.title}
              subtitle={content.subtitle}
              align="center"
            />
          </div>

          {status === "success" ? (
            <div className="rounded-2xl border border-line bg-canvas px-6">
              <SuccessState title={content.successTitle} message={content.successMessage}>
                <button type="button" onClick={() => setStatus("idle")} className="btn btn-secondary">
                  {content.resetLabel}
                </button>
              </SuccessState>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {content.questions.map((question, questionIndex) => (
                <fieldset key={question.id}>
                  <legend className="contents">
                    <StepLabel step={questionIndex + 1} text={question.question} />
                  </legend>
                  <div
                    className={`grid grid-cols-1 gap-3 ${optionGridColumns[question.options.length] ?? "sm:grid-cols-3"}`}
                  >
                    {question.options.map((option) => {
                      const isSelected = answers[question.id] === option.id;

                      return (
                        <button
                          key={option.id}
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() => selectAnswer(question.id, option.id)}
                          className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 text-left transition-colors ${
                            isSelected
                              ? "border-olive bg-surface-strong"
                              : "border-line bg-canvas hover:border-line-strong"
                          }`}
                        >
                          <span
                            className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${
                              isSelected ? "bg-olive text-on-dark" : "border border-line bg-card text-muted"
                            }`}
                          >
                            <Icon name={option.iconName} className="size-4" />
                          </span>
                          <span>
                            <span className="mb-0.5 block text-xs font-bold leading-snug text-ink">
                              {option.title}
                            </span>
                            <span className="block text-tiny text-muted">{option.subtitle}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              ))}

              <div>
                <StepLabel step={content.questions.length + 1} text={content.contactQuestion} />
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <input
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    aria-label={content.namePlaceholder}
                    placeholder={content.namePlaceholder}
                    className="field"
                  />
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    aria-label={content.phonePlaceholder}
                    placeholder={content.phonePlaceholder}
                    className="field"
                  />
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary h-11 py-0">
                    {isSubmitting ? (
                      <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
                    ) : (
                      <ClipboardCheck aria-hidden="true" className="size-4" />
                    )}
                    {isSubmitting ? content.submittingLabel : content.submitLabel}
                  </button>
                </div>

                {status === "error" && (
                  <p role="alert" className="mt-3 text-center text-xs font-medium text-danger">
                    {content.errorMessage}
                  </p>
                )}

                <p className="mt-4 flex items-center justify-center gap-2 text-center text-tiny text-subtle">
                  <ShieldCheck aria-hidden="true" className="size-3.5 shrink-0" />
                  {content.privacyNotice}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

