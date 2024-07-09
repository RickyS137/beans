import { configureStore } from "@reduxjs/toolkit";
import { beansReducer } from "./slices/beans/beans-slice";
import { $api } from "@/requester";
import { ThunkExtraArg } from "@/constants/api";


function createReduxStore (){
  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  return configureStore({
    reducer: {
      beans: beansReducer,
    },
    middleware: getDefaultMiddleWare => 
      getDefaultMiddleWare({ thunk: { extraArgument: extraArg } })
  })
} 

export const store = createReduxStore();
export type RootState = ReturnType<typeof store.getState>
export type TypeDispatch = ReturnType<typeof createReduxStore>['dispatch'];
