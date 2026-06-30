export interface Item {
  position: number;
  title: string;
  rating: number;
  reviews_original: string;
  reviews: number;
  price: string;
  type: string;
  address: string;
  description: string;
  place_id: string;
  place_id_search: string;
  lsig: string;
  thumbnail: string;
  thumbnail_large: string;
  serpapi_thumbnail: string;
  gps_coordinates: GpsCoordinates;
}

export interface GpsCoordinates {
  latitude: number;
  longitude: number;
}
