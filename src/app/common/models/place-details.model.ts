export interface PlacePhoto {
  thumbnail: string;
  image: string;
  video?: string;
}

export interface PlacePhotosResponse {
  photos?: PlacePhoto[];
  error?: string;
}

export interface PlaceReviewUser {
  name: string;
  thumbnail: string;
  local_guide?: boolean;
}

export interface PlaceReview {
  rating: number;
  date: string;
  snippet?: string;
  images?: string[];
  user: PlaceReviewUser;
}

export interface PlaceReviewsResponse {
  reviews?: PlaceReview[];
  error?: string;
}
