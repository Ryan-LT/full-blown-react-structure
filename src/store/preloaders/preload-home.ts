import { Store, getDefaultForecast } from '@store';

export const preloadHome = async ({ dispatch }: Store) => {
  await dispatch(getDefaultForecast());
};
