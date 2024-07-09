import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, TypeDispatch } from "@/redux/store";


export const useAppDispatch = () => useDispatch<TypeDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;