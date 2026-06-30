import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { SearchResponse } from '@common/models/search-result.model';
import { environment } from '../../../environments/environment';
import { RESPONSE_EXAMPLE_CONST } from '@common/consts/response-example.const';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private readonly http = inject(HttpClient);

  search(term: { query: string; start?: string }): Observable<SearchResponse> {
    // let params = new HttpParams()
    //   .set('engine', 'google_local')
    //   .set('q', term.query)
    //   .set('google_domain', 'google.com')
    //   .set('api_key', environment.serpApiKey);
    //
    // if (term.start) {
    //   params = params.set('start', term.start);
    // }
    //
    // return this.http
    //   .get<SearchResponse>(environment.serpApiBaseUrl, { params })
    //   .pipe(catchError(() => of(RESPONSE_EXAMPLE_CONST)));

    return of(RESPONSE_EXAMPLE_CONST);
  }
}
