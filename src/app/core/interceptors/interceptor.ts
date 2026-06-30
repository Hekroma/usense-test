import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const url = request.url;
    console.log(!url.match('https'));
    if (!url.match('https')) {
      request = request.clone({
        url: `${request.url}`,
      });
    }

    request = request.clone({
      withCredentials: true,
    });
    return next.handle(request);
  }
}
