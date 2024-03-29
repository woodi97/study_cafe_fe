import axios, { AxiosInstance } from 'axios';
import qs from 'qs';
import { useMemo } from 'react';
import { envConfig } from '../config/envConfig.js';

let axiosInstance: AxiosInstance = null;

const customAxiosEnv = axios.create({
  withCredentials: false,
  baseURL: envConfig.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  paramsSerializer(params) {
    return qs.stringify(params);
  },
});

export const customAxios = () => {
  if (axiosInstance) {
    return axiosInstance;
  }
  axiosInstance = customAxiosEnv;
  return axiosInstance;
};

export const useAxiosEnvironment = () =>
  useMemo(() => {
    customAxios();
  }, []);
