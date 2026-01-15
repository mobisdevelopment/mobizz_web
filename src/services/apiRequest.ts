import { TokenService } from "./tokenService";

const DEBUG = process.env.NEXT_PUBLIC_API_DEBUG === "true";

export async function makeApiRequest(
  baseUrl: string,
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  const url = `${baseUrl}${endpoint}`;
  const token = await TokenService.getBearerToken();

  if (DEBUG) {
    console.log("🔵 API Request:", {
      method: options.method || "GET",
      url,
      headers: {
        ...options.headers,
        ...(token ? { Authorization: "Bearer ***" } : {}),
      },
      body: options.body,
    });
  }

  const isFormData = options.body instanceof FormData;
  const response = await fetch(url, {
    ...options,
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...options.headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (DEBUG) {
    const clonedResponse = response.clone();
    const plainText = await clonedResponse.text();
    let responseData;
    try {
      responseData = JSON.parse(plainText);
    } catch {
      responseData = plainText;
    }
    if (response.ok) {
      console.log("🟢 API Response Success:", {
        url,
        status: response.status,
        data: responseData,
      });
    } else {
      console.log("🔴 API Response Error:", {
        status: response.status,
        statusText: response.statusText,
        url,
        body: responseData,
      });
    }
  }

  return response;
}
