import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) { }

  async login(user: any) {
    console.log({user});
    
    const result = await this.http.post<any>(`${environment.apiUrl}/auth/login`, user).toPromise();
    console.log({result});
    
    if (result && result.access_token) {
      window.localStorage.setItem('token', result.access_token);
      return true;
    }

    return false;
  }

  async createAccount(account: any) {
    const result = await this.http.post<any>(`${environment.apiUrl}/user`, account).toPromise();
    return result;
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): any {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }
}
