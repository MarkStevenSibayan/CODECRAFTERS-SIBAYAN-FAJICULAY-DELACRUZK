import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent  implements OnInit {
  userPangalan = localStorage.getItem('userName')
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  back(){
    this.modalController.dismiss()
  }
}
