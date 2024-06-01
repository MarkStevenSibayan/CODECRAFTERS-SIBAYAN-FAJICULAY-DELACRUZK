import { Component, OnInit } from '@angular/core';
import {Comset, User, iComset, iUser} from '../home.model';
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
  
  contentDo :boolean =false;
  comsetDo  :boolean =false;
  pcassDo  :boolean =false;
  itnewDo  :boolean =false;

  comSet: Comset = new Comset();
  userComset: iComset[] = [];

  user: User = new User();
  userList: iUser[] = [];
  
  prof: Profile = new Profile();
  userProfile: iProfile[] = [];
  isLoading: boolean = false;

  constructor(
    private homeService: HomeService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.users();
    this.comset();
  }

  ionViewWillEnter(){
    this.contentDo = this.homeService.contentDo;
    this.comsetDo = this.homeService.comsetDo; 
    this.pcassDo = this.homeService.pcassDo;
    this.itnewDo = this.homeService.itnewDo;
    this.users(); 
    this.comset();
  }


  async users(){
    this.isLoading = true;
    this.userList = await this.homeService.getUser();
    this.isLoading = false;
  }

  async comset(){
    this.isLoading = true;
    this.userComset = await this.homeService.getComset();
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

  async openModalComset(comset: Comset) {
    this.ionViewWillEnter();
    this.homeService.userId = comset.id
    this.homeService.userDesc = comset.comdesc
    this.homeService.userLink = comset.comlink
    this.homeService.userMessage = comset.commessage
    this.homeService.userReact = comset.comreact


    const modal = await this.modalController.create({
      component: ContentComponent,
    });
    modal.present();
  }


}
