import { CreateAxiosDefaults, AxiosRequestConfig } from "axios";
import { Options } from "./interface";

interface CreateAxiosDefaultsProps {
  baseUrl: string;
  options?: Options;
}
const createAxiosDefaults = ({
  baseUrl = "/api",
  options,
}: Partial<CreateAxiosDefaultsProps>): CreateAxiosDefaults => {
  const {
    version,
    contentType = "application/json",
    charset,
    accept,
  } = options ?? {};
  return {
    baseURL:
      typeof version !== "undefined" ? [baseUrl, version].join("/") : baseUrl,
    headers: {
      "Content-type": [contentType, charset && `; charset=${charset}`].join(""),
      Accept: accept,
    },
    validateStatus: (status) => status >= 200 && status < 500,
  };
};

const axiosRequestConfig: AxiosRequestConfig = {
  withCredentials: true,
};

export { createAxiosDefaults, axiosRequestConfig };
