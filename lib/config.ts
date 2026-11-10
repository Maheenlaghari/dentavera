export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

export const USE_MOCK_API = API_BASE_URL.length === 0;

export const MOCK_LATENCY_MS = 600;

export const CONTENT_REVALIDATE_SECONDS = 300;

export const API_ENDPOINTS = {
  siteContent: "/site/content",
  reviews: "/reviews",
  consultations: "/consultations",
  evaluations: "/evaluations",
} as const;

