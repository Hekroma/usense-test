import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import {
  PlacePhotosResponse,
  PlaceReviewsResponse,
} from '@common/models/place-details.model';
import { environment } from '../../../environments/environment';
import { CacheService } from '@core/services/cache.service';

@Injectable({ providedIn: 'root' })
export class PlaceDetailsService {
  private readonly http = inject(HttpClient);
  private readonly cache = inject(CacheService);

  getPhotos(placeId: string): Observable<PlacePhotosResponse> {
    return this.fetch<PlacePhotosResponse>('google_maps_photos', placeId);
  }

  getReviews(placeId: string): Observable<PlaceReviewsResponse> {
    return this.fetch<PlaceReviewsResponse>('google_maps_reviews', placeId);
  }

  private fetch<T>(engine: string, placeId: string): Observable<T> {
    const cacheKey = `${engine}:${placeId}`;
    const cached = this.cache.get<T>(cacheKey);

    if (cached) {
      return of(cached);
    }

    const params = new HttpParams()
      .set('engine', engine)
      .set('data_id', toDataId(placeId))
      .set('api_key', environment.serpApiKey);

    return this.http
      .get<T>(environment.serpApiBaseUrl, { params })
      .pipe(tap((res) => this.cache.set(cacheKey, res)));
  }
}

// Google Local's numeric CID (place_id) maps to a Maps data_id of the form
// "0x0:0x<cid in hex>", which the google_maps_photos/reviews engines expect.
function toDataId(placeId: string): string {
  return `0x0:0x${BigInt(placeId).toString(16)}`;
}
