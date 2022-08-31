import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:1337/Users/1';  // Web APIのURL

  constructor(
    private http: HttpClient,
  ) { }




  /** サーバーからヒーローを取得する */
  getUser(): Observable<User> {

    return this.http.get<User>(this.userUrl);
  }

  addUser(user:any){

    console.log(user);
    return this.http.post<User>("http://localhost:1337/Users", user);
  }

}