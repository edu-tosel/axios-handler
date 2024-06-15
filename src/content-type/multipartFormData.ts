import { AxiosRequestConfig } from "axios";
import { axios } from "../instance";
import { Options } from "../interface";

function multipartFormData(baseURL = "/api", options?: Options) {
  const { version, withCredentials } = options ?? {};
  const instance = axios(
    "multipart/form-data",
    typeof version !== "undefined" ? [baseURL, version].join("/") : baseURL
  );

  const defaultConfig: AxiosRequestConfig = {
    withCredentials: withCredentials ?? true,
  };

  return {
    post: <Request = any, Response = unknown>(
      url: string,
      data?: Request,
      config?: AxiosRequestConfig
    ) => {
      return instance.post<Response>(url, data, {
        ...defaultConfig,
        ...config,
      });
    },
    put: <Request = any, Response = unknown>(
      url: string,
      data?: Request,
      config?: AxiosRequestConfig
    ) => {
      return instance.put<Response>(url, data, { ...defaultConfig, ...config });
    },
    patch: <Request = any, Response = unknown>(
      url: string,
      data?: Request,
      config?: AxiosRequestConfig
    ) => {
      return instance.patch<Response>(url, data, {
        ...defaultConfig,
        ...config,
      });
    },
  };
}

export default multipartFormData;
