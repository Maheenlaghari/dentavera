import { apiRequest, mockResponse } from "@/lib/api-client";
import { API_ENDPOINTS, MOCK_LATENCY_MS, USE_MOCK_API } from "@/lib/config";
import type {
  CandidateEvaluationRequest,
  ConsultationRequest,
  SubmissionResponse,
} from "@/types/api";

function createMockSubmission(): SubmissionResponse {
  return { id: Date.now().toString(36), status: "received" };
}

export async function submitConsultation(request: ConsultationRequest): Promise<SubmissionResponse> {
  if (USE_MOCK_API) {
    return mockResponse(createMockSubmission(), MOCK_LATENCY_MS);
  }

  return apiRequest<SubmissionResponse>(API_ENDPOINTS.consultations, {
    method: "POST",
    body: request,
  });
}

export async function submitCandidateEvaluation(
  request: CandidateEvaluationRequest,
): Promise<SubmissionResponse> {
  if (USE_MOCK_API) {
    return mockResponse(createMockSubmission(), MOCK_LATENCY_MS);
  }

  return apiRequest<SubmissionResponse>(API_ENDPOINTS.evaluations, {
    method: "POST",
    body: request,
  });
}

