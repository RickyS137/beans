import { createSlice } from "@reduxjs/toolkit"
import { IBeans } from "./types/beans-types"
import { getBeans } from "./service/beans-service"


const initialState: IBeans = {
  beans: {},
  isLoading: ''
}


const beansSlice = createSlice({
  name: 'beans',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
      builder
        .addCase(getBeans.fulfilled, (state, action) => {
          state.beans = action.payload
        })
        .addCase(getBeans.rejected, (state) => {
          state.beans = {}
        })
        .addCase(getBeans.pending, (state) => {
          state.isLoading = 'Загрузка...'
        })
  },
})

export const { reducer: beansReducer } = beansSlice
export const { actions: beansActions } = beansSlice