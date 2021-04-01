import {
  TLocationData,
  TSearchRequest,
  TSearchResponse,
} from '@types';
import { AxiosInstance } from 'axios';

export const createApi = (client: AxiosInstance) => ({
  get: {
    search: (params: TSearchRequest) =>
      client.get<TSearchResponse>('/location/search/', { params }),
    location: (woeid: string) =>
      client.get<TLocationData>(`/location/${woeid}/`),
  },
});

export type Api = ReturnType<typeof createApi>;
