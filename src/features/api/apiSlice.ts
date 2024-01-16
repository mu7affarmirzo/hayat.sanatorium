import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "./request";
import { storageService } from "./storageService";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
        const token = storageService.load("token");
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

export const ApiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery: baseQuery,
    tagTypes: ["Login", "get_ibs"],
    endpoints: () => ({}),
});
