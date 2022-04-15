import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { UserSignIn } from '../interface/user-sign-in';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };
  register(url: string, userForm: User): Observable<User> {
    return this.http.post<any>(url, userForm, this.httpOptions);
  }
  signIn(url: string, userForm: UserSignIn): Observable<UserSignIn> {
    return this.http.post<any>(url, userForm, this.httpOptions);
  }
  getToken() {
    return localStorage.getItem('access');
  }
  logout() {
    localStorage.clear();
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access');
    return authToken !== null ? true : false;
  }
}
