import { AxiosRequestConfig } from "axios";
import { axios } from "../instance";
import { Options } from "../interface";

function applicationJson(baseURL = "/api", options?: Options) {
  const { version, withCredentials } = options ?? {};
  const instance = axios(
    "application/json",
    typeof version !== "undefined" ? [baseURL, version].join("/") : baseURL
  );

  const defaultConfig: AxiosRequestConfig = {
    withCredentials: withCredentials ?? true,
  };

  return {
    get: <RES>(url: string, data?: AxiosRequestConfig) => {
      return instance
        .get<RES>(url, { ...data, ...defaultConfig })
        .then((res) => res.data);
    },
    post: <REQ, RES>(url: string, data?: REQ, config?: AxiosRequestConfig) => {
      return instance
        .post<RES>(url, data, { ...defaultConfig, ...config })
        .then((res) => res.data);
    },
    put: <REQ, RES>(url: string, data?: REQ, config?: AxiosRequestConfig) => {
      return instance
        .put<RES>(url, data, { ...defaultConfig, ...config })
        .then((res) => res.data);
    },
    patch: <REQ, RES>(url: string, data?: REQ, config?: AxiosRequestConfig) => {
      return instance
        .patch<RES>(url, data, { ...defaultConfig, ...config })
        .then((res) => res.data);
    },
    delete: <RES>(url: string, data?: object) => {
      return instance
        .delete<RES>(url, { ...data, ...defaultConfig })
        .then((res) => res.data);
    },
  };
}

export default applicationJson;
