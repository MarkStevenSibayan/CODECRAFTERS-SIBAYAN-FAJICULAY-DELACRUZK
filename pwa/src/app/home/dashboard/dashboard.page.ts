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
  ) { this.users(); }

  ngOnInit() {}

  async users(){
    this.isLoading = true;
    this.userList = await this.homeService.getUser();
    this.isLoading = false;
  }

  async openModal(userid: string, userlink: string, userdesc: string, userMessage: string, userReact: number, user: User) {
    localStorage.setItem('userID', userid)
    localStorage.setItem('userLink', userlink)
    localStorage.setItem('userDesc', userdesc)
    localStorage.setItem('userMessage', userMessage)
    localStorage.setItem("userReact", userReact.toString())

    const modal = await this.modalController.create({
      component: ContentComponent,
    });
    modal.present();
    
  }

  async Add(user: User){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try{
        const doc = await addDoc(collection(firestore, "profile"), {
          desc: user.desc,
          link: user.link,
          message: user.message,
          react: user.react

            // firstName: user.firstName,
            // middleName: user.middleName,
            // lastName: user.lastName,
        });
        //method 2
        // const docRefM2 = await addDoc(collection(firestore, "users"),
        // user
        //  );

        console.log("Document written with ID: ", doc.id)
        
    } catch (e) {
        console.error("Error adding Document: ", e)
    }
  }

}
