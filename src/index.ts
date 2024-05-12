import http from "./http";
import { Http } from "./interface";

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

export { handler };
