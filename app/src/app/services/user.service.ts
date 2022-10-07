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
  constructor(private http: HttpClient) {}

  loginUser!: User;

  /** サーバーからヒーローを取得する */
  getUser(id: number): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    });
    return this.http.get<User>('http://localhost:1337/Users/' + id, {
      headers,
    });
  }

  getFollowing(myId: number): Observable<User[]> {
    return this.http.get<User[]>(
      `http://localhost:1337/Users?followers=${myId}`
    );
  }

  addUser(user: any) {
    return this.http.post<User>('http://localhost:1337/Users', user);
  }

  registerUser(user: User) {
    return this.http.post<any>(
      'http://localhost:1337/auth/local/register',
      user
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
