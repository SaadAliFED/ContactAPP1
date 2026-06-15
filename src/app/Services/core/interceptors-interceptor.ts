import { HttpInterceptorFn } from '@angular/common/http';
import { LoadingService } from './loading-service';
import { finalize } from 'rxjs';
import { inject } from '@angular/core';
import { environment } from '../../../environments/environment ';

export const interceptorsInterceptor: HttpInterceptorFn = (req, next) => {

  const loadingService = inject(LoadingService);
  loadingService.show();

  // Skip absolute URLs and JSON files in assets
  const isJsonRequest = req.url.includes('.json') || req.url.startsWith('http');
  const apiReq = isJsonRequest
    ? req
    : req.clone({
      url: `${environment.apiUrl}${req.url}`
    });

  // Add Token
  // const token = localStorage.getItem('token');

  // const authReq = token
  //   ? apiReq.clone({
  //     setHeaders: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   })
  //   : apiReq;

  return next(apiReq).pipe(
    finalize(() => {
      loadingService.hide();
    })
  );
};
