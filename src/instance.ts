import Axios, { AxiosRequestConfig } from "axios";
function axios(ContentType: string, baseURL: string) {
  const config: AxiosRequestConfig = {
    baseURL: baseURL || "/api",
    headers: {
      "Content-type": ContentType,
    },
  };
  const instance = Axios.create(config);
  return instance;
}

export { axios };
