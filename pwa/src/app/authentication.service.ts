import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated = false;
  constructor() { }

  canProceed(){
    return this.authenticated = true;
  }

  setAuthentication(auth:boolean){
    if(auth){
      localStorage.setItem("Login", "true");
    }
  }
}
