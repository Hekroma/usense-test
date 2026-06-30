import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Item } from '@common/models/search-result.model';
import { environment } from '../../../environments/environment';

interface SerpApiResponse {
  local_results: Item[];
}

@Injectable({ providedIn: 'root' })
export class SearchService {
  private readonly http = inject(HttpClient);

  search(query: string): Observable<Item[]> {
    return this.http
      .get<SerpApiResponse>('https://serpapi.com/search.json', {
        params: {
          engine: 'google_local',
          q: query,
          google_domain: 'google.com',
          api_key: environment.serpApiKey,
          async: true,
        },
      })
      .pipe(map((response) => response.local_results ?? []));
  }
}
