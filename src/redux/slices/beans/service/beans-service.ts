import { ENDPOINTS, ThunkConfig } from "@/constants/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBeansRequest, IBeansRequestParams } from "../types/beans-types";



export const getBeans = createAsyncThunk<IBeansRequest, IBeansRequestParams, ThunkConfig<string>>(
  'beans/getBeans',
  async (params, thunkApi) => {
    const { extra } = thunkApi
    console.log(extra.api);
    
    try {
      const response = await extra.api.get(ENDPOINTS.BEANS, { params })
      return response.data
    } catch (e) {
      console.error(e)
    }
  }
)