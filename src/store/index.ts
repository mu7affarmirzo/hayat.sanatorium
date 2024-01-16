import { ApiSlice } from "features/api/apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "features/redusers/rootRedusers";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"],
};

const middleware = (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
        ApiSlice.middleware
    );

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
