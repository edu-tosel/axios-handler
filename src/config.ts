import { CreateAxiosDefaults, AxiosRequestConfig } from "axios";
import { ContentType } from "./interface";

interface CreateAxiosDefaultsProps {
  baseUrl: string;
  version: string;
  contentType: ContentType;
}
const createAxiosDefaults = ({
  baseUrl = "/api",
  version,
  contentType,
}: Partial<CreateAxiosDefaultsProps>): CreateAxiosDefaults => ({
  baseURL:
    typeof version !== "undefined" ? [baseUrl, version].join("/") : baseUrl,
  headers: {
    "Content-type": contentType ?? "application/json",
  },
});

const axiosRequestConfig: AxiosRequestConfig = {
  withCredentials: true,
};

export { createAxiosDefaults, axiosRequestConfig };
