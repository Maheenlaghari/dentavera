import { API_BASE_URL } from "@/lib/config";

interface RequestOptions {
  method?: "GET" | "POST";
  body?: unknown;
  revalidate?: number;
}

export class ApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function apiRequest<T>(
  endpoint: string,
  { method = "GET", body, revalidate }: RequestOptions = {},
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: body === undefined ? undefined : JSON.stringify(body),
    next: revalidate === undefined ? undefined : { revalidate },
  });

  if (!response.ok) {
    throw new ApiError(`Request to ${endpoint} failed with status ${response.status}`, response.status);
  }

  return (await response.json()) as T;
}

export function mockResponse<T>(data: T, delayMs = 0): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delayMs);
  });
}

