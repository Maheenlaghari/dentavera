import { apiRequest, mockResponse } from "@/lib/api-client";
import { API_ENDPOINTS, CONTENT_REVALIDATE_SECONDS, USE_MOCK_API } from "@/lib/config";
import { reviews } from "@/data/reviews";
import { siteContent } from "@/data/site-content";
import type { Review } from "@/types/api";
import type { SiteContent } from "@/types/content";

export async function getSiteContent(): Promise<SiteContent> {
  if (USE_MOCK_API) {
    return mockResponse(siteContent);
  }

  return apiRequest<SiteContent>(API_ENDPOINTS.siteContent, {
    revalidate: CONTENT_REVALIDATE_SECONDS,
  });
}

export async function getReviews(): Promise<Review[]> {
  if (USE_MOCK_API) {
    return mockResponse(reviews);
  }

  return apiRequest<Review[]>(API_ENDPOINTS.reviews, {
    revalidate: CONTENT_REVALIDATE_SECONDS,
  });
}

