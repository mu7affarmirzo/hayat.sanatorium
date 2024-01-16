import { ApiSlice } from "../api/apiSlice";

export const extendedApiSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (post) => ({
                url: "/token/",
                method: "POST",
                body: post,
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),
        refreshToken: builder.mutation({
            query: (post) => ({
                url: "/api/v1/token/refresh/",
                method: "POST",
                body: post,
            }),
        }),
    }),
    overrideExisting: true,
});

export const { useLoginMutation, useRefreshTokenMutation } = extendedApiSlice;
