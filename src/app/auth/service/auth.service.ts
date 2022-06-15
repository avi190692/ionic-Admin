import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  router: any;

  constructor() {}

  login(username: string, password: string): Boolean {
    if(username === "admin" && password === "admin") {
      return true;
    } else {
      return false;
    }
}
}