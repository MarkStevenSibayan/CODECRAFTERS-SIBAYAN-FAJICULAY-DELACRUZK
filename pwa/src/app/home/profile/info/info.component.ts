import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Information, iInfo } from '../profile.model';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent  implements OnInit {
  userPangalan = localStorage.getItem('userName')

  information: Information = new Information();
  userInformation: iInfo[] = [];
  constructor(
    private modalController: ModalController,
    private homeService: HomeService,
    private toastController: ToastController
  ) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.Information();
  }


  back(){
    this.Information();
    this.modalController.dismiss()
  }

  async Information(){
    this.userInformation = await this.homeService.getInformation();
  }

  async apply(information: Information){
    this.information = information
    if(this.information.bio.length < 25){
      this.homeService.UpdateInformation(this.information)
      this.Information();
      this.back();
      const toast = await this.toastController.create({
        message: 'Sucessfully Save',
        duration: 5000,
        position: 'top',
      })

      await toast.present();
    } 
    else {
      this.homeService.presentAlert('Failed', 'Maximum of 25 letters in Bio')
      this.Information();
    }

    
  }
}
