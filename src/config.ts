import { CreateAxiosDefaults, AxiosRequestConfig } from "axios";
import { ContentType, Options } from "./interface";

interface CreateAxiosDefaultsProps {
  baseUrl: string;
  options?: Options;
}
const createAxiosDefaults = ({
  baseUrl = "/api",
  options,
}: Partial<CreateAxiosDefaultsProps>): CreateAxiosDefaults => {
  const { version, contentType = "application/json", charset } = options ?? {};
  return {
    baseURL:
      typeof version !== "undefined" ? [baseUrl, version].join("/") : baseUrl,
    headers: {
      "Content-type": [contentType, charset && `charset=${charset}`].join(";"),
    },
  };
};

const axiosRequestConfig: AxiosRequestConfig = {
  withCredentials: true,
};

export { createAxiosDefaults, axiosRequestConfig };
