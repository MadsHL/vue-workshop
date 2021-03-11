import axios, { AxiosInstance, AxiosResponse } from "axios";
// @ts-ignore
import https from "https";

class RestService {
  private axiosInstance: AxiosInstance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  });

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    params?: Record<string, any>
  ): Promise<R> {
    return this.axiosInstance.get<T, R>(url, {
      params
    });
  }

  dummy() {
    return { sager: { XX1: 11, XX2: 2 } };
  }
}

export const restService = new RestService();
