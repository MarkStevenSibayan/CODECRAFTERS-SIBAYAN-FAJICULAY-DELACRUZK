import { Component, OnInit } from '@angular/core';
import {User, iUser} from '../home.model';
import { HomeService } from '../home.service';
import { ModalController } from '@ionic/angular';
import { ContentComponent } from './content/content.component';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Profile, iProfile } from '../profile/profile.model';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user: User = new User();
  userList: iUser[] = [];
  
  prof: Profile = new Profile();
  userProfile: iProfile[] = [];
  isLoading: boolean = false;
  constructor(
    private homeService: HomeService,
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.users(); 
  }


  async users(){
    this.isLoading = true;
    this.userList = await this.homeService.getUser();
    this.isLoading = false;
  }

  async openModal(user: User) {
    this.ionViewWillEnter();
    this.homeService.userId = user.id
    this.homeService.userDesc = user.desc
    this.homeService.userLink = user.link
    this.homeService.userMessage = user.message
    this.homeService.userReact = user.react


    const modal = await this.modalController.create({
      component: ContentComponent,
    });
    modal.present();
  }


}
