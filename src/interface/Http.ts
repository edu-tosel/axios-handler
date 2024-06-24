import { AxiosRequestConfig, AxiosResponse } from "axios";
interface Http {
  get: <RES = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<RES>>;
  post: <REQ = any, RES = unknown>(
    url: string,
    data?: REQ,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<RES>>;
  put: <REQ = any, RES = unknown>(
    url: string,
    data?: REQ,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<RES>>;
  patch: <REQ = any, RES = unknown>(
    url: string,
    data?: REQ,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<RES>>;
  delete: <RES = unknown>(
    url: string,
    data?: AxiosRequestConfig
  ) => Promise<AxiosResponse<RES>>;
}

export type { Http };
