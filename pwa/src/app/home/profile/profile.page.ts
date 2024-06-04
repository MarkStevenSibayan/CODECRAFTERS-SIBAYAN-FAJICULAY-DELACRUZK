import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { User, iUser } from '../home.model';
import { Information, Profile, iInfo, iProfile } from './profile.model';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { ContentComponent } from '../dashboard/content/content.component';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { deleteDoc, doc, getFirestore } from 'firebase/firestore';
import { InfoComponent } from './info/info.component';


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

  information: Information = new Information();
  userInformation: iInfo[] = [];

  isLoading = false;
  
  constructor(
    private homeService: HomeService,
    private route: Router,
    private authenticationService: AuthenticationService,
    private modalController: ModalController,
    private alertController: AlertController,
    private toastController: ToastController
  ) 
  { 
    

  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.users();
    this.profiles(); 
    this.Information();
  }

  async users(){
    this.userList = await this.homeService.getUser();
  }

  async profiles(){
    this.userProfile = await this.homeService.getProfile();

  }

  async Information(){
    this.userInformation = await this.homeService.getInformation();
  }

  logout(){
    this.route.navigate(['login'])
    this.authenticationService.setAuthentication(false);
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

  async delete(prof: Profile){
    this.prof = prof
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try{
        const docu = doc(firestore, "profile", prof.id)
        await deleteDoc(docu);
        
        const toast = await this.toastController.create({
          message: 'Sucessfully Deleted',
          duration: 5000,
          position: 'top',
        })

        await toast.present();
        localStorage.setItem('notificationMessage', 'You Successfully delete "'+this.prof.desc+'" to your profile account Time: '+ this.homeService.getCurrentTime())
        this.homeService.AddNotif();
    } catch (e) {
        console.error("Error adding Document: ", e)
    }

    this.users();
    this.profiles(); 
  }

  async openInfo() {

    const modal = await this.modalController.create({
      component: InfoComponent,
    });
    modal.present();
  }

}
