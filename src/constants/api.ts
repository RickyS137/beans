import { AxiosInstance } from "axios";
import { Dispatch } from "redux";

export const BASE_URL = import.meta.env.VITE_BASE_URL

export const ENDPOINTS = {
  BEANS: '/api/beans',
  BEAN_BY_ID: '/api/beans/:id',
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  dispatch?: Dispatch;
}
