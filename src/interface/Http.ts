interface Http {
  get: <RES = Response>(url: string, data?: object) => Promise<RES>;
  post: <REQ = any, RES = Response>(
    url: string,
    data?: REQ,
    config?: object
  ) => Promise<RES>;
  put: <REQ = any, RES = Response>(
    url: string,
    data?: REQ,
    config?: object
  ) => Promise<RES>;
  patch: <REQ = any, RES = Response>(
    url: string,
    data?: REQ,
    config?: object
  ) => Promise<RES>;
  delete: <RES = Response>(url: string, data?: object) => Promise<RES>;
  postFormData: <REQ = any, RES = Response>(
    url: string,
    data?: REQ,
    config?: object
  ) => Promise<RES>;
  putFormData: <REQ = any, RES = Response>(
    url: string,
    data?: REQ,
    config?: object
  ) => Promise<RES>;
  patchFormData: <REQ = any, RES = Response>(
    url: string,
    data?: REQ,
    config?: object
  ) => Promise<RES>;
}

export type { Http };
