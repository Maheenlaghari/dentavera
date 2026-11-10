export interface Review {
  id: string;
  author: string;
  treatment: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ConsultationRequest {
  fullName: string;
  contact: string;
  concern: string;
}

export interface CandidateEvaluationRequest {
  fullName: string;
  phone: string;
  answers: Record<string, string>;
}

export interface SubmissionResponse {
  id: string;
  status: "received";
}

export type FormStatus = "idle" | "submitting" | "success" | "error";
