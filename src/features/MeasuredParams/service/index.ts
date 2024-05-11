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
  useMeasuredParamsTemperatureMutation
} = measuredParamsService;
