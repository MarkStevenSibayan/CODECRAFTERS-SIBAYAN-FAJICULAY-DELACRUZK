import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProfilePage } from './profile/profile.page';
import { ModalComponent } from './modal/modal.component';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private homeService: HomeService,
    private authenticationService: AuthenticationService,
    private route: Router,
    private modalController: ModalController
  ) {}

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
    });
    modal.present();
    
  }
}
