import { ApiSlice } from "features/api/apiSlice";
import { GetMyPatients } from "types/patientTypes";

export const patientService = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllMyPatients: builder.query<GetMyPatients[], void>({
            query: () => ({
                url: "/sanatorium/get-my-patients",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetAllMyPatientsQuery } = patientService;
