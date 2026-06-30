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

    if (!new RegExp(/(assets|\.json)/).exec(url) && !/https/.exec(url)) {
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
