import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  search(query: string | null): Observable<unknown[]> {
    return of([{ query }]);
  }
}
