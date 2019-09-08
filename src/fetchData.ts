import axios, { AxiosResponse } from "axios";

export interface DemoJsonResponse {
  success: boolean;
}

export const fetchData: () => Promise<AxiosResponse<DemoJsonResponse>> = () => {
  const url = "http://www.dell-lee.com/react/api/demo.json1";
  return axios.get<DemoJsonResponse>(url);
};
