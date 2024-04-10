import { axiosInstance } from "./axiosInstance";

export const AuthApi = (payload) => {
  return axiosInstance.post(`auth/login`, payload);
};

export const ProductListApi = (payload) => {
  return axiosInstance.get("products", payload);
};

export const ProductListSearchApi = (query, payload) => {
  return axiosInstance.get(`products/search?q=${query}`, payload);
};
