import axios, { AxiosRequestConfig } from "axios";
import { Http, Options } from "./interface";
import { axiosRequestConfig, createAxiosDefaults } from "./config";

function instance(baseUrl: string, options?: Options): Http {
  const instance = axios.create(
    createAxiosDefaults({
      baseUrl,
      options,
    })
  );
  return {
    get: <RES>(url: string, config?: AxiosRequestConfig) =>
      instance.get<RES>(url, { ...axiosRequestConfig, ...config }),
    post: <REQ, RES>(url: string, data?: REQ, config?: AxiosRequestConfig) =>
      instance.post<RES>(url, data, { ...axiosRequestConfig, ...config }),
    put: <REQ, RES>(url: string, data?: REQ, config?: AxiosRequestConfig) =>
      instance.put<RES>(url, data, { ...axiosRequestConfig, ...config }),
    patch: <REQ, RES>(url: string, data?: REQ, config?: AxiosRequestConfig) =>
      instance.patch<RES>(url, data, { ...axiosRequestConfig, ...config }),
    delete: <RES>(url: string, data?: object) =>
      instance.delete<RES>(url, { ...data, ...axiosRequestConfig }),
  };
}

export default instance;
