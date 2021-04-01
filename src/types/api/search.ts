export type TSearchRequest = {
  query?: string;
  lattlong?: string;
};

export type TSearchResponse = {
  title: string;
  location_type: string;
  latt_long: string;
  woeid: number;
  distance?: number;
}[];
