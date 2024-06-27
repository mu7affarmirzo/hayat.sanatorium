import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from './request';
import { storageService } from './storageService';
import { refreshTokenHandler } from 'helper/refreshTokenHandler';
import { logout, tokenRefresh } from 'features/login/AuthSlice';
import { BaseQueryApi, QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { RootState } from 'features/redusers/rootRedusers';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: async (headers, { getState }) => {
    // const token = storageService.load('token');
    const { token } = (getState() as RootState).auth
    // console.log({ getstate })
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    // await refreshTokenHandler();
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api: BaseQueryApi, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    // try to get a new token
    const state = api.getState() as RootState
    const refreshToken = state?.auth?.refresh

    const refreshResult: QueryReturnValue<any, FetchBaseQueryError, FetchBaseQueryMeta>
      = await baseQuery({
        url: '/token/refresh/',
        method: 'POST',
        body: { refresh: refreshToken ?? '' }
      }, api, extraOptions)

    if (refreshResult.data) {
      // store the new token
      if (refreshResult.data.access) {
        console.log('dispatch');

        api.dispatch(tokenRefresh({ token: refreshResult.data.access }))
      }
      // retry the initial query
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logout())
    }
  }
  return result
}

export const ApiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Login', 'get_ibs'],
  endpoints: () => ({}),
});
