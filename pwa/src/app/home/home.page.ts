import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProfilePage } from './profile/profile.page';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(
    private authenticationService: AuthenticationService,
    private route: Router,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.authenticationService.authenticated = false;
  }
  
  logout(){
    this.authenticationService.authenticated = false;
    this.route.navigate(['login']);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
    });
    modal.present();
    
  }
}
