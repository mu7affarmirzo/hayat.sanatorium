import { ApiSlice } from "features/api/apiSlice";
import { GetAllEventTypes } from "types/eventsTypes";

export const eventsViewsService = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllEvents: builder.query<GetAllEventTypes[], void>({
            query: () => ({
                url: "/sanatorium/doctors/get-patients-events",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetAllEventsQuery } = eventsViewsService;
