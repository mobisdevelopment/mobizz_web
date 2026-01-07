const DEBUG = process.env.NEXT_PUBLIC_API_DEBUG === "true";

export async function makeApiRequest(
  baseUrl: string,
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  const url = `${baseUrl}${endpoint}`;

  if (DEBUG) {
    console.log("🔵 API Request:", {
      method: options.method || "GET",
      url,
      headers: {
        ...options.headers,
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
    },
  });

  if (DEBUG) {
    const clonedResponse = response.clone();
    const responseData = await clonedResponse.json().catch(() => null);
    if (response.ok) {
      console.log("🟢 API Response Success:", {
        url,
        status: response.status,
        data: JSON.stringify(responseData),
      });
    } else {
      console.log("🔴 API Response Error:", {
        status: response.status,
        statusText: response.statusText,
        url,
        body: JSON.stringify(responseData),
      });
    }
  }

  return response;
}
