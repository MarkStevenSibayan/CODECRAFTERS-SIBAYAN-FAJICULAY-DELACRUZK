import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private authenticationService: AuthenticationService,
    private route: Router
  ) {}

  logout(){
    this.authenticationService.authenticated = false;
    this.route.navigate(['login']);
  }

}
