import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { User, Question } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = 'http://localhost:1337/Users/7'; // Web APIのURL

  constructor(private http: HttpClient) {}

  loginUser!: User;

  /** サーバーからヒーローを取得する */
  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }

  addUser(user: any) {
    return this.http.post<User>('http://localhost:1337/Users', user);
  }

  registerUser(mailadress: string, password: string) {
    const data = {
      username: mailadress,
      email: mailadress,
      password: password,
    };
    return this.http.post<any>(
      'http://localhost:1337/auth/local/register',
      data
    );
  }

  login(identifier: string, password: string) {
    const data = {
      identifier: identifier,
      password: password,
    };
    return this.http
      .post<any>('http://localhost:1337/auth/local', data)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
