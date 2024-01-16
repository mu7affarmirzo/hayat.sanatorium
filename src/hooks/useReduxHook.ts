import { RootState } from "features/redusers/rootRedusers";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { AppDispatch } from "store";

export const useReduxDispatch = () => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
