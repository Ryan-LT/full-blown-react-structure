import { AxiosInstance } from 'axios';

export const createApi = (client: AxiosInstance) => ({
  get: {
    query: (params: any) => client.get('/location/search/', { params }),
  },
});

export type Api = ReturnType<typeof createApi>;
