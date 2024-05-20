import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { User, iUser } from '../home.model';
import { Profile, iProfile } from './profile.model';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { ContentComponent } from '../dashboard/content/content.component';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userPangalan = localStorage.getItem('userName');
  user: User = new User();
  userList: iUser[] = [];
  
  prof: Profile = new Profile();
  userProfile: iProfile[] = [];

  isLoading = false;
  
  constructor(
    private homeService: HomeService,
    private route: Router,
    private authenticationService: AuthenticationService,
    private modalController: ModalController
  ) 
  { 
    

  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.users();
    this.profiles(); 
  }

  async users(){
    this.isLoading = true;
    this.userList = await this.homeService.getUser();
    this.isLoading = false;
  }

  async profiles(){
    this.isLoading = true;
    this.userProfile = await this.homeService.getProfile();
    this.isLoading = false;
  }

  logout(){
    this.route.navigate(['login'])
    this.authenticationService.authenticated = false;
  }

  async openModal(user: User) {
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
