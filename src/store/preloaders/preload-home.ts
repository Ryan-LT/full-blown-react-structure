import { Store, searchLocation } from '@store';

export const preloadHome = async ({ dispatch }: Store) => {
  await dispatch(searchLocation({ query: 'london' }));
};
