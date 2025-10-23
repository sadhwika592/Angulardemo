import { validateVerticalPosition } from '@angular/cdk/overlay';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';


export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  
  const snackBar = inject(MatSnackBar);
  return next(req).pipe(
    catchError((error) => {
      let message = 'Something went wrong, try again :)';
      if (error.status === 0) message = 'Server cant be reached';
      else if (error.status === 404) message = ' 404 Resource not found';
      else if (error.status === 401) message = '401 Unauthorized access';
      else if (error.status === 500) message = '500 Internal Server Error';
      else if (error.status === 502) message = '502 Bad Gateway';

      snackBar.open(message, 'Close', {
        duration : 7000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['error-snackbar'],
      });

      return throwError(() => error);
    })
  );

};
