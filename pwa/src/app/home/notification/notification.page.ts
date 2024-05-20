import { Component, OnInit } from '@angular/core';
import { User, iUser } from '../home.model';
import { HomeService } from '../home.service';
import { iNotification, Notification } from './notification.model';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  notif: Notification = new Notification();
  notificationList: iNotification[] = [];
  isLoading = false;


  constructor(
    private homeService: HomeService,
    private alertController: AlertController
  ) { 

  }

  ngOnInit() {}

  ionViewWillEnter(){
    this.notific();
  }


  async notific(){
    this.isLoading = true;
    this.notificationList = await this.homeService.getNotification();
    this.isLoading = false;
  }

  

  async presentAlert(header: string, message: string){
    const alert = await this.alertController.create({
      header: header,
      subHeader: message,
      buttons: ['okay']
    });
    await alert.present();
  }

  
}
