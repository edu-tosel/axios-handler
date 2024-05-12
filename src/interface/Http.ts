interface Http {
  get: <Response = unknown>(url: string, data?: object) => Promise<Response>;
  post: <Request = any, Response = unknown>(
    url: string,
    data?: Request
  ) => Promise<Response>;
  put: <Request = any, Response = unknown>(
    url: string,
    data?: Request
  ) => Promise<Response>;
  patch: <Request = any, Response = unknown>(
    url: string,
    data?: Request
  ) => Promise<Response>;
  delete: <Response = unknown>(url: string, data?: object) => Promise<Response>;
}

export type { Http };
