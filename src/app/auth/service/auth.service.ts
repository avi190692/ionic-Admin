import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/shared/services/crud.service';
import { UserService } from 'src/app/shared/services/user.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  
  

  constructor( 
    private router: Router,
    private crudService : CrudService ,
    private tokenService : TokenService,
    private userService : UserService

  ) {

  }

  login(username: string, password: string): Observable<any> {
    return this.crudService.post('/v1/private/login', { username, password });
  }
  logout() {
    this.tokenService.destroyToken();
    this.userService.destroyUserId();
    this.userService.roles = {
      canAccessToOrder: false,
      isSuperadmin: false,
      isAdmin: false,
      isAdminCatalogue: false,
      isAdminStore: false,
      isAdminOrder: false,
      isAdminContent: false,
      isCustomer: false,
      isAdminRetail: false,
    };
    localStorage.removeItem('roles');
    localStorage.removeItem('merchant');
    this.router.navigate(['login']);
  }
  refresh(): Observable<any> {
    return this.crudService.get('/v1/auth/refresh');
  }
}