import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { SearchResponse } from '@common/models/search-result.model';
import { environment } from '../../../environments/environment';
import { CacheService } from '@core/services/cache.service';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private readonly http = inject(HttpClient);
  private readonly cache = inject(CacheService);

  search(term: { query: string; start?: string }): Observable<SearchResponse> {
    const cacheKey = `search:${term.query.trim().toLowerCase()}:${term.start ?? '0'}`;
    const cached = this.cache.get<SearchResponse>(cacheKey);

    if (cached) {
      return of(cached);
    }

    let params = new HttpParams()
      .set('engine', 'google_local')
      .set('q', term.query)
      .set('google_domain', 'google.com')
      .set('api_key', environment.serpApiKey);

    if (term.start) {
      params = params.set('start', term.start);
    }

    return this.http
      .get<SearchResponse>(environment.serpApiBaseUrl, { params })
      .pipe(tap((res) => this.cache.set(cacheKey, res)));
  }
}
