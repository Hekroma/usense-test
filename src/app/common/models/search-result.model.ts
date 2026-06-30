export interface SearchResponse {
  search_metadata: SearchMetadata;
  search_parameters: SearchParameters;
  local_map: LocalMap;
  local_results: LocalResult[];
  pagination: Pagination;
  serpapi_pagination: SerpapiPagination;
}

export interface SearchMetadata {
  id: string;
  status: string;
  json_endpoint: string;
  created_at: string;
  processed_at: string;
  google_local_url: string;
  raw_html_file: string;
  total_time_taken: number;
}

export interface SearchParameters {
  engine: string;
  q: string;
  google_domain: string;
  hl: string;
  gl: string;
  device: string;
}

export interface LocalMap {
  gps_coordinates: GpsCoordinates;
}

export interface GpsCoordinates {
  latitude: number;
  longitude: number;
}

export interface LocalResult {
  position: number;
  rating: number;
  reviews: number;
  reviews_original: string;
  price: string;
  description: string;
  thumbnail: string;
  thumbnail_large: string;
  place_id: string;
  place_id_search: string;
  provider_id: string;
  gps_coordinates: GpsCoordinates2;
  title: string;
  type: string;
  address: string;
}

export interface GpsCoordinates2 {
  latitude: number;
  longitude: number;
}

export interface Pagination {
  current: number;
  next: string;
  other_pages: OtherPages;
}

export interface OtherPages {
  '2': string;
  '3': string;
  '4': string;
  '5': string;
}

export interface SerpapiPagination {
  current: number;
  next_link: string;
  next: string;
  other_pages: OtherPages2;
}

export interface OtherPages2 {
  '2': string;
  '3': string;
  '4': string;
  '5': string;
}
