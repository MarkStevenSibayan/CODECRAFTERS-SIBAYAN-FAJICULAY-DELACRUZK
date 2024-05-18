import { Component, OnInit } from '@angular/core';
import { User, iUser } from '../../home.model';
import { AlertController, ModalController } from '@ionic/angular';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent  implements OnInit {
  userID = localStorage.getItem('userID') ;
  userLink = localStorage.getItem('userLink');
  userDesc = localStorage.getItem('userDesc');
  userReact = localStorage.getItem('userReact');
  userMessage = localStorage.getItem('userMessage');

  currentTime = new Date();
  

  color: string = '';

  constructor(
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private homeService: HomeService
  ) {
  }

  ngOnInit() {}

  back() {
    return this.modalCtrl.dismiss();
  }

  action(){
    this.color = "danger";
  }

  // async Update(user: User){
  //   const app = initializeApp(environment.firebaseConfig);
  //   const firestore = getFirestore(app);

  //   try{
  //       const docRef = doc(firestore, "users", user.id);
  //       await updateDoc(docRef, {
          
  //           // firstName: user.firstName,
  //           // middleName: user.middleName,
  //           // lastName: user.lastName,
  //       })
  //   } catch (e) {
  //       console.error("Error adding Document: ", e)
  //   }
  // }

  async Add(){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try{
        const doc = await addDoc(collection(firestore, "profile"), {
          desc: this.userDesc,
          link: this.userLink,
          message: this.userMessage,
          react: this.userReact
        });

        console.log("Document written with ID: ", doc.id)
        this.presentAlert('Success', "Successfully Saved")
        localStorage.setItem('notificationMessage', 'You Successfully save "'+this.userDesc+'" to your profile account')
        this.homeService.AddNotif();
        
    } catch (e) {
        console.error("Error adding Document: ", e)
    }
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
