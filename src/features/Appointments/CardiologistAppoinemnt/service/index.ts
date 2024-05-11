import { ApiSlice } from 'features/api/apiSlice';
import {
  CardiologistAppointment,
  GetCardiologistAppointmentTypes,
} from '../types';

const cardiologistService = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getCardiologistAppoinmnet: build.query<
      GetCardiologistAppointmentTypes,
      number
    >({
      query: (id) => ({
        url: `/sanatorium/appointments/get-update-cardiologist-appointment/${id}`,
        method: 'GET',
      }),
    }),
    postCardiologistAppoinmnet: build.mutation<
      GetCardiologistAppointmentTypes,
      CardiologistAppointment
    >({
      query: (data) => ({
        url: `/sanatorium/appointments/cardiologist-appointment`,
        method: 'POST',
        body: data,
      }),
    }),
    patchCardiologistAppoinmnet: build.mutation<
      GetCardiologistAppointmentTypes,
      { id: number; data: CardiologistAppointment }
    >({
      query: ({ id, data }) => ({
        url: `/sanatorium/appointments/get-update-cardiologist-appointment/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
});

export const {
  usePostCardiologistAppoinmnetMutation,
  useGetCardiologistAppoinmnetQuery,
  usePatchCardiologistAppoinmnetMutation,
} = cardiologistService;
