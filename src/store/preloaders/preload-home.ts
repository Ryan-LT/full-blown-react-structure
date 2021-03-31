import { Store, getHome } from '@store';

export const preloadHome = async ({ dispatch }: Store) => {
  await dispatch(getHome());
};
