import { ApiSlice } from 'features/api/apiSlice';
import { GetIBSTypes, GetIBSTypes2 } from 'types/booked';

export const bookedApiService = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllIbs: builder.query<GetIBSTypes2[], void>({
            query: () => ({
                url: '/sanatorium/get-ibs2',
                method: 'GET',
            }),
        }),
        getIbsWithId: builder.query<GetIBSTypes, number>({
            query: (id) => ({
                url: `/sanatorium/get-ib/${id}`,
                method: 'GET',
            }),
        }),
        postSearchIbs: builder.mutation<GetIBSTypes, { word: string }>({
            query: (word) => ({
                url: '/sanatorium/search-ibs',
                body: word,
                method: 'POST',
            }),
        }),
        postIbUpdateWithID: builder.mutation({
            query: (id: number) => ({
                url: `/sanatorium/ib-update/${id}`,
                method: 'PUT',
            }),
        }),
        postDiagnos: builder.mutation({
            query: (data: any) => ({
                url: `sanatorium/post-diagnos/`,
                body: data,
                method: 'POST',
            }),
        }),
    }),
});

export const {
    useGetAllIbsQuery,
    useGetIbsWithIdQuery,
    usePostSearchIbsMutation,
    usePostIbUpdateWithIDMutation,
    usePostDiagnosMutation,
} = bookedApiService;
