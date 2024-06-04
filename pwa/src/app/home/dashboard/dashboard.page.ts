import { Component, OnInit } from '@angular/core';
import {Assembly, Comset, News, User, iAssembly, iComset, iNews, iUser} from '../home.model';
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

  assembly: Assembly = new Assembly();
  userAssembly: iAssembly[] = [];
 
  news: News = new News();
  userNews: iNews[] = [];

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
    this.assemb(); 
    this.newss();
  }


  async users(){
    this.userList = await this.homeService.getUser();
  }

  async comset(){
    this.userComset = await this.homeService.getComset();
  }

  async assemb(){
    this.userAssembly = await this.homeService.getAssembly();
  }

  async newss(){
    this.userNews = await this.homeService.getNews();
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

  async openModalAssembly(assembly: Assembly) {
    this.ionViewWillEnter();
    this.homeService.userId = assembly.id
    this.homeService.userDesc = assembly.asdesc
    this.homeService.userLink = assembly.aslink
    this.homeService.userMessage = assembly.asmessage
    this.homeService.userReact = assembly.asreact


    const modal = await this.modalController.create({
      component: ContentComponent,
    });
    modal.present();
  }

  async openModalNews(news: News) {
    this.ionViewWillEnter();
    this.homeService.userId = news.id
    this.homeService.userDesc = news.newsdesc
    this.homeService.userLink = news.newslink
    this.homeService.userMessage = news.newsmessage
    this.homeService.userReact = news.newsreact


    const modal = await this.modalController.create({
      component: ContentComponent,
    });
    modal.present();
  }


  


}
