import { ApiSlice } from "features/api/apiSlice";
import { GetIBSTypes } from "types/booked";

export const bookedApiService = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllIbs: builder.query<GetIBSTypes[], void>({
            query: () => ({
                url: "/sanatorium/get-ibs",
                method: "GET",
            }),
        }),
        getIbsWithId: builder.query({
            query: (id: number) => ({
                url: `/sanatorium/get-ib/${id}`,
                method: "GET",
            }),
        }),
        postSearchIbs: builder.mutation({
            query: (word: string) => ({
                url: "/sanatorium/search-ibs",
                body: word,
                method: "POST",
            }),
        }),
        postIbUpdateWithID: builder.mutation({
            query: (id: number) => ({
                url: `/sanatorium/ib-update/${id}`,
                method: "PUT",
            }),
        }),
    }),
});

export const {
    useGetAllIbsQuery,
    useGetIbsWithIdQuery,
    usePostSearchIbsMutation,
    usePostIbUpdateWithIDMutation,
} = bookedApiService;
