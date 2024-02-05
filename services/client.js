import { create } from "apisauce";
import authService from "./auth";

import settings from "@/config/settings";

const apiClient = create({
  baseURL: settings.apiUrl,
});

apiClient.axiosInstance.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    alert(`An unexpected error occured - ${error.message}`);
  }

  return Promise.reject(error);
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = authService.getJwt();

  console.log(authToken);

  if (!authToken) return;

  request.headers["Authorization"] = `Bearer ${authToken}`;
});

export default apiClient;
