import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../types/types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

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

  addUser(){
    const user = {
      mailadress: 'hogehoge@exmaple.com',
      password: 'testPass101',
      user_name: 'aiueo tarou',
      birth_date: '2002-05-07',
      birth_place: 'fukushima',
      affilition : 'wiz',
    }

    console.log(user);
    return this.http.post<User>("http://localhost:1337/Users", user);
  }

}
