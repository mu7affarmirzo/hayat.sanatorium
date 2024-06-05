import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from './request';
import { storageService } from './storageService';
import { RefreshTokenHandler } from 'helper/refreshTokenHandler';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: async (headers) => {
    const token = storageService.load('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    await RefreshTokenHandler;
    return headers;
  },
});

export const ApiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: baseQuery,
  tagTypes: ['Login', 'get_ibs'],
  endpoints: () => ({}),
});
