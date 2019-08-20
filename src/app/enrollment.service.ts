import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {Rol} from './Models/rol';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  url = 'http://localhost:3000/enroll';

  constructor(private httpClient: HttpClient) {
  }

  enroll(rol: Rol) {
    return this.httpClient
      .post<any>(this.url, rol)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
