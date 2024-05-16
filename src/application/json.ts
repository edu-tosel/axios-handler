import { AxiosRequestConfig } from "axios";
import { axios } from "../instance";
import { Options } from "../interface";

function applicationJson(baseURL = "/api", options?: Options) {
  const { version, withCredentials } = options ?? {};
  const instance = axios(
    "application/json",
    typeof version !== "undefined" ? [baseURL, version].join("/") : baseURL
  );

  const config: AxiosRequestConfig = {
    withCredentials: withCredentials ?? true,
  };

  return {
    get: <Response = unknown>(url: string, data?: AxiosRequestConfig) => {
      return instance
        .get<Response>(url, { ...data, ...config })
        .then((res) => res.data);
    },
    post: <Request = any, Response = unknown>(url: string, data?: Request) => {
      return instance.post<Response>(url, data, config).then((res) => res.data);
    },
    put: <Request = any, Response = unknown>(url: string, data?: Request) => {
      return instance.put<Response>(url, data, config).then((res) => res.data);
    },
    patch: <Request = any, Response = unknown>(url: string, data?: Request) => {
      return instance
        .patch<Response>(url, data, config)
        .then((res) => res.data);
    },
    delete: <Response = unknown>(url: string, data?: object) => {
      return instance
        .delete<Response>(url, { ...data, ...config })
        .then((res) => res.data);
    },
  };
}

export default applicationJson;
