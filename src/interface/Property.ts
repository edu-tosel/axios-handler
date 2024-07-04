type ContentType =
  | "application/json"
  | "application/x-www-form-urlencoded"
  | "multipart/form-data"
  | "text/html";

interface Options {
  version?: string;
  contentType?: ContentType;
  charset?: string;
}

export type { Options, ContentType };
