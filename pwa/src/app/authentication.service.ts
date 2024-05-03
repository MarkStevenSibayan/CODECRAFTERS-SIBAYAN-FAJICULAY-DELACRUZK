import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated = true;
  constructor() { }

  canActivate(){
    return this.authenticated;
  }

  setAuthentication(auth:boolean){
    if(auth){
      localStorage.setItem("Login", "true");
    }
  }
}
