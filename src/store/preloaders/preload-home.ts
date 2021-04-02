import { Store, getLocation } from '@store';

export const preloadHome = async ({ dispatch }: Store) => {
  await dispatch(getLocation(1252431));
};
