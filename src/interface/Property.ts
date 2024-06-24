type ContentType =
  | "application/json"
  | "application/x-www-form-urlencoded"
  | "multipart/form-data";

interface Options {
  version?: string;
  contentType?: ContentType;
}

export type { Options, ContentType };
