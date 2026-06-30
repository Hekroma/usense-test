import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import {
  LocalResult,
  SearchResponse,
} from '@common/models/search-result.model';
import { environment } from '../../../environments/environment';
import { RESPONSE_EXAMPLE_CONST } from '@common/consts/response-example.const';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private readonly http = inject(HttpClient);

  search(query: string): Observable<SearchResponse> {
    // return this.http
    //   .get<SearchResponse>(`${environment.serpApiBaseUrl}`, {
    //     params: {
    //       engine: 'google_local',
    //       q: query,
    //       google_domain: 'google.com',
    //       api_key: environment.serpApiKey,
    //     },
    //   })
    //   .pipe(
    //     map((res) => res),
    //     catchError((err) => {
    //       return of(RESPONSE_EXAMPLE_CONST);
    //     }),
    //   );
    return of(RESPONSE_EXAMPLE_CONST);
  }
}
