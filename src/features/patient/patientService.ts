import { ApiSlice } from "features/api/apiSlice";

export const patientService = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllPatients: builder.query({
            query: () => ({
                url: "/organizations/patients/",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetAllPatientsQuery } = patientService;
