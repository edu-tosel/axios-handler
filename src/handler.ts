import applicationJson from "./application/json";
import { Http, Options } from "./interface";

function http(baseURL?: string, options?: Options): Http {
  return {
    get: applicationJson(baseURL, options).get,
    post: applicationJson(baseURL, options).post,
    put: applicationJson(baseURL, options).put,
    patch: applicationJson(baseURL, options).patch,
    delete: applicationJson(baseURL, options).delete,
  };
}

function handler<T extends Record<string, string>>(
  obj: T
): { [p in keyof T]: (version?: string) => Http } {
  return Object.keys(obj).reduce<{
    [p in keyof T]: (version?: string) => Http;
  }>((acc, cur) => {
    acc[cur as keyof T] = (version?: string) => http(obj[cur], { version });
    return acc;
  }, {} as { [p in keyof T]: (version?: string) => Http });
}

export default handler;
