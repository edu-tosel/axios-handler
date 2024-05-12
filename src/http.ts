import applicationJson from "./application/json";
import { Http, Options } from "./interface";

export default function http(baseURL?: string, options?: Options): Http {
  return {
    get: applicationJson(baseURL, options).get,
    post: applicationJson(baseURL, options).post,
    put: applicationJson(baseURL, options).put,
    patch: applicationJson(baseURL, options).patch,
    delete: applicationJson(baseURL, options).delete,
  };
}
