import { ApiSlice } from 'features/api/apiSlice';
import {
  ArterialParamProps,
  ArterialParamResponse,
  GlucometerParamResponse,
  GlucometerParamProps,
  PulseParamProps,
  PulseParamResponse,
  SaturationParamProps,
  SaturationParamResponse,
  TemperatureParamProps,
  TemperatureParamResponse,
} from '../types';

const measuredParamsService = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    arterialPressureList: build.query<
      ArterialParamResponse[],
      number
    >({
      query: (id) => ({
        url: `/sanatorium/appointments/measured-params/arterial/list/${id}`,
        method: 'GET',
      }),
    }),
    glucometerList: build.query<
      GlucometerParamResponse[],
      number
    >({
      query: (id) => ({
        url: `/sanatorium/appointments/measured-params/glucometer/list/${id}`,
        method: 'GET',
      }),
    }),
    pulseList: build.query<
      PulseParamResponse[],
      number
    >({
      query: (id) => ({
        url: `/sanatorium/appointments/measured-params/pulse/list/${id}`,
        method: 'GET',
      }),
    }),
    saturationList: build.query<
      SaturationParamResponse[],
      number
    >({
      query: (id) => ({
        url: `/sanatorium/appointments/measured-params/saturation/list/${id}`,
        method: 'GET',
      }),
    }),
    temperatureList: build.query<
      TemperatureParamResponse[],
      number
    >({
      query: (id) => ({
        url: `/sanatorium/appointments/measured-params/temperature/list/${id}`,
        method: 'GET',
      }),
    }),
    arterialPressureEdit: build.mutation<
      ArterialParamResponse[],
      { id: number, body: ArterialParamProps }
    >({
      query: ({ id, body }) => ({
        url: `/sanatorium/appointments/measured-params/arterial/${id}`,
        method: 'PATCH',
        body,
      }),
    }),
    glucometerEdit: build.mutation<
      GlucometerParamResponse[],
      { id: number, body: GlucometerParamProps }
    >({
      query: ({ body, id }) => ({
        url: `/sanatorium/appointments/measured-params/glucometer/${id}`,
        method: 'PATCH',
        body,
      }),
    }),
    pulseEdit: build.mutation<
      PulseParamResponse[],
      { id: number, body: PulseParamProps }
    >({
      query: ({ body, id }) => ({
        url: `/sanatorium/appointments/measured-params/pulse/${id}`,
        method: 'PATCH',
        body,
      }),
    }),
    saturationEdit: build.mutation<
      SaturationParamResponse[],
      { id: number, body: SaturationParamProps }
    >({
      query: ({ body, id }) => ({
        url: `/sanatorium/appointments/measured-params/saturation/${id}`,
        method: 'PATCH',
        body,
      }),
    }),
    temperatureEdit: build.mutation<
      TemperatureParamResponse[],
      { id: number, body: TemperatureParamProps }
    >({
      query: ({ body, id }) => ({
        url: `/sanatorium/appointments/measured-params/temperature/${id}`,
        method: 'PATCH',
        body,
      }),
    }),
    arterialPressureDelete: build.mutation<
      ArterialParamResponse,
      { id: number }
    >({
      query: ({ id }) => ({
        url: `/sanatorium/appointments/measured-params/arterial/${id}`,
        method: 'DELETE',
      }),
    }),
    glucometerDelete: build.mutation<
      GlucometerParamResponse,
      { id: number }
    >({
      query: ({ id }) => ({
        url: `/sanatorium/appointments/measured-params/glucometer/${id}`,
        method: 'DELETE',
      }),
    }),
    pulseDelete: build.mutation<
      PulseParamResponse,
      { id: number }
    >({
      query: ({ id }) => ({
        url: `/sanatorium/appointments/measured-params/pulse/${id}`,
        method: 'DELETE',
      }),
    }),
    saturationDelete: build.mutation<
      SaturationParamResponse,
      { id: number }
    >({
      query: ({ id }) => ({
        url: `/sanatorium/appointments/measured-params/saturation/${id}`,
        method: 'DELETE',
      }),
    }),
    temperatureDelete: build.mutation<
      TemperatureParamResponse,
      { id: number }
    >({
      query: ({ id }) => ({
        url: `/sanatorium/appointments/measured-params/temperature/${id}`,
        method: 'DELETE',
      }),
    }),
    measuredParamsArterial: build.mutation<ArterialParamResponse, ArterialParamProps>({
      query: (data) => ({
        url: `/sanatorium/appointments/measured-params/arterial`,
        method: 'POST',
        body: data,
      }),
    }),
    measuredParamsGlucometer: build.mutation<GlucometerParamResponse, GlucometerParamProps>({
      query: (data) => ({
        url: `/sanatorium/appointments/measured-params/glucometer`,
        method: 'POST',
        body: data,
      }),
    }),
    measuredParamsPulse: build.mutation<PulseParamResponse, PulseParamProps>({
      query: (data) => ({
        url: `/sanatorium/appointments/measured-params/pulse`,
        method: 'POST',
        body: data,
      }),
    }),
    measuredParamsSaturation: build.mutation<SaturationParamResponse, SaturationParamProps>({
      query: (data) => ({
        url: `/sanatorium/appointments/measured-params/saturation`,
        method: 'POST',
        body: data,
      }),
    }),
    measuredParamsTemperature: build.mutation<TemperatureParamResponse, TemperatureParamProps>({
      query: (data) => ({
        url: `/sanatorium/appointments/measured-params/temperature`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useMeasuredParamsArterialMutation,
  useMeasuredParamsGlucometerMutation,
  useMeasuredParamsPulseMutation,
  useMeasuredParamsSaturationMutation,
  useMeasuredParamsTemperatureMutation,
  useArterialPressureEditMutation,
  useGlucometerEditMutation,
  usePulseEditMutation,
  useSaturationEditMutation,
  useTemperatureEditMutation,
  useArterialPressureDeleteMutation,
  useGlucometerDeleteMutation,
  usePulseDeleteMutation,
  useSaturationDeleteMutation,
  useTemperatureDeleteMutation,
  useArterialPressureListQuery,
  useGlucometerListQuery,
  usePulseListQuery,
  useSaturationListQuery,
  useTemperatureListQuery,

} = measuredParamsService;
