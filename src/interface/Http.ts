import { AxiosResponse } from "axios";
interface Http {
  get: <RES = unknown>(
    url: string,
    data?: object
  ) => Promise<AxiosResponse<RES>>;
  post: <REQ = any, RES = unknown>(
    url: string,
    data?: REQ,
    config?: object
  ) => Promise<AxiosResponse<RES>>;
  put: <REQ = any, RES = unknown>(
    url: string,
    data?: REQ,
    config?: object
  ) => Promise<AxiosResponse<RES>>;
  patch: <REQ = any, RES = unknown>(
    url: string,
    data?: REQ,
    config?: object
  ) => Promise<AxiosResponse<RES>>;
  delete: <RES = unknown>(
    url: string,
    data?: object
  ) => Promise<AxiosResponse<RES>>;
  postFormData: <REQ = any, RES = unknown>(
    url: string,
    data?: REQ,
    config?: object
  ) => Promise<AxiosResponse<RES>>;
  putFormData: <REQ = any, RES = unknown>(
    url: string,
    data?: REQ,
    config?: object
  ) => Promise<AxiosResponse<RES>>;
  patchFormData: <REQ = any, RES = unknown>(
    url: string,
    data?: REQ,
    config?: object
  ) => Promise<AxiosResponse<RES>>;
}

export type { Http };
