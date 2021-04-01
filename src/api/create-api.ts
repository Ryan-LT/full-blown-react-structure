import { AxiosInstance } from 'axios';

export const createApi = (client: AxiosInstance) => ({
  get: {
    query: (params: any) => client.get('/location/2487956/', { params }),
  },
});

export type Api = ReturnType<typeof createApi>;
