interface Http {
  get: <RES = unknown>(url: string, data?: object) => Promise<RES>;
  post: <REQ = any, RES = unknown>(
    url: string,
    data?: REQ,
    config?: object
  ) => Promise<RES>;
  put: <REQ = any, RES = unknown>(
    url: string,
    data?: REQ,
    config?: object
  ) => Promise<RES>;
  patch: <REQ = any, RES = unknown>(
    url: string,
    data?: REQ,
    config?: object
  ) => Promise<RES>;
  delete: <RES = unknown>(url: string, data?: object) => Promise<RES>;
  postFormData: <REQ = any, RES = unknown>(
    url: string,
    data?: REQ,
    config?: object
  ) => Promise<RES>;
  putFormData: <REQ = any, RES = unknown>(
    url: string,
    data?: REQ,
    config?: object
  ) => Promise<RES>;
  patchFormData: <REQ = any, RES = unknown>(
    url: string,
    data?: REQ,
    config?: object
  ) => Promise<RES>;
}

export type { Http };
