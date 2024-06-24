import instance from "./instance";
import { Http, Options } from "./interface";

type Handler<T> = {
  [p in keyof T]: (
    version?: string,
    options?: Omit<Options, "version">
  ) => Http;
};

function handler<T extends Record<string, string>>(obj: T): Handler<T> {
  return Object.keys(obj).reduce<Handler<T>>((acc, cur) => {
    acc[cur as keyof T] = (
      version?: string,
      options?: Omit<Options, "version">
    ) => instance(obj[cur], { version, ...options });
    return acc;
  }, {} as Handler<T>);
}

export { handler };
