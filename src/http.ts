import { Http, Options } from "./interface";
import applicationJson from "./application/json";
import multipartFormData from "./multipart/formData";

export default function http(baseURL?: string, options?: Options): Http {
  return {
    get: applicationJson(baseURL, options).get,
    post: applicationJson(baseURL, options).post,
    put: applicationJson(baseURL, options).put,
    patch: applicationJson(baseURL, options).patch,
    delete: applicationJson(baseURL, options).delete,
    postFormData: multipartFormData(baseURL, options).post,
    putFormData: multipartFormData(baseURL, options).put,
    patchFormData: multipartFormData(baseURL, options).patch,
  };
}
