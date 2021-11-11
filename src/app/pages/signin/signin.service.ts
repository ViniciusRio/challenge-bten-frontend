import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  url: string = `${environment.apiUrl}/api`;

  constructor() { }

  public saveUser() {

  }
}
