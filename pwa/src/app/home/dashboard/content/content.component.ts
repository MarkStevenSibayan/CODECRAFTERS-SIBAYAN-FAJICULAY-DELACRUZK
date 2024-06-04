import { Component, OnInit } from '@angular/core';
import { User, iUser } from '../../home.model';
import { AlertController, ModalController } from '@ionic/angular';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { HomeService } from '../../home.service';
import { Profile, iProfile } from '../../profile/profile.model';
import { CommentComponent } from './comment/comment.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent  implements OnInit {
  
  user: User = new User();
  userList: iUser[] = [];

  prof: Profile = new Profile();
  userProfile: iProfile[] = [];
  isLoading: boolean = false;


  userID = this.homeService.userId
  userLink = this.homeService.userLink
  userDesc = this.homeService.userDesc
  userReact = this.homeService.userReact
  userMessage = this.homeService.userMessage


  currentTime = new Date();
  

  color: string = '';

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private homeService: HomeService
  ) {
  }


  ngOnInit() {
  }

  back() {
    return this.modalController.dismiss();
  }


  async action(){
    if(this.color == ''){
      const app = initializeApp(environment.firebaseConfig);
      const firestore = getFirestore(app);

      try{
          const docRef = doc(firestore, "users", this.userID);
          await updateDoc(docRef, {
            react: this.userReact + 1
          })
          this.userReact = this.userReact + 1
          this.color = "danger";
      } catch (e) {
          console.error("Error adding Document: ", e)
      }
    } else if (this.color == 'danger'){
      const app = initializeApp(environment.firebaseConfig);
      const firestore = getFirestore(app);

      try{
          const docRef = doc(firestore, "users", this.userID);
          await updateDoc(docRef, {
            react: this.userReact - 1
          })
          this.userReact = this.userReact - 1
          this.color = "";
      } catch (e) {
          console.error("Error adding Document: ", e)
      }
    }
    
  }



  async Add(){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

      if(this.homeService.ProfileContent.includes(this.userDesc)){
        this.presentAlert('Failed', "You already saved the content")
      } else {
        try{
          const doc = await addDoc(collection(firestore, "profile"), {
            desc: this.userDesc,
            link: this.userLink,
            message: this.userMessage,
            react: this.userReact,
          });
  
          this.homeService.ProfileContent.push(this.userDesc)
          console.log("Document written with ID: ", doc.id)
          this.presentAlert('Success', "Successfully Saved")
          localStorage.setItem('notificationMessage', 'You Successfully save "'+this.userDesc+'" to your profile account -- Time: '+ this.homeService.getCurrentTime());
          this.homeService.AddNotif();
          
      } catch (e) {
          console.error("Error adding Document: ", e)
      }
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


  async openModal(user: User) {
    
    const modal = await this.modalController.create({
      component: CommentComponent,
    });
    modal.present();
  }


}
