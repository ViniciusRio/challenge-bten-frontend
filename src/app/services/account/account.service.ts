import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // url: string = `${environment.apiUrl}/api`;
  constructor() { }

  login(user: any) {
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'my-token');

      resolve(true);
    })
  }

  createAccount(account: any) {
    return new Promise((resolve) => {
      resolve(true);
    })
  }
}
