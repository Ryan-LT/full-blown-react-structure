import { AxiosInstance } from 'axios';
import qs from 'qs';

export const configureClient = (client: AxiosInstance) => {
  client.defaults.baseURL = '/api';
  client.defaults.paramsSerializer = (params: any) =>
    qs.stringify(params, { arrayFormat: 'repeat' });
};
