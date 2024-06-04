import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor() {
   }

  canActivate(){
    if(localStorage.getItem("Login") === "true"){
        return true;
    } else {
      return false;
    }

  }

  setAuthentication(auth:boolean){
    if(auth){
      localStorage.setItem("Login", "true");
    } else {
      localStorage.setItem("Login", "false");
    }
    
  }
}
