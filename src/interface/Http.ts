interface Http {
  get: <Response = unknown>(url: string, data?: object) => Promise<Response>;
  post: <Request = any, Response = unknown>(
    url: string,
    data?: Request,
    config?: object
  ) => Promise<Response>;
  put: <Request = any, Response = unknown>(
    url: string,
    data?: Request,
    config?: object
  ) => Promise<Response>;
  patch: <Request = any, Response = unknown>(
    url: string,
    data?: Request,
    config?: object
  ) => Promise<Response>;
  delete: <Response = unknown>(url: string, data?: object) => Promise<Response>;
}

export type { Http };
