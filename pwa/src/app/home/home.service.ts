import { Injectable } from '@angular/core';

import { addDoc, collection, getFirestore, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { User, iUser } from './home.model';
import { HomePage } from './home.page';
import { Profile, iProfile } from './profile/profile.model';
import { iNotification, Notification} from './notification/notification.model';
import { AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class HomeService {


  ProfileContent: any[] = [];
  userId: string = '';
  userLink: string = '';
  userDesc: string = '';
  userMessage: string  = '';
  userReact: number = 0;

  constructor(private alertController: AlertController) {}

  async getUser(): Promise<iUser[]> {
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);
    const users: User[] = [];

    const querySnapshot = await getDocs(collection(firestore, "users"));
    querySnapshot.forEach((doc) => {
        const user = doc.data() as User;
        user.id = doc.id;
        users.push(user);
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
    });
    return users;
  }

  async getProfile(): Promise<iProfile[]> {
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);
    const profiles: Profile[] = [];

    const querySnapshot = await getDocs(collection(firestore, "profile"));
    querySnapshot.forEach((doc) => {
        const profile = doc.data() as Profile;
        profile.id = doc.id;
        profiles.push(profile);
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
    });
    return profiles;
  }

  async getNotification(): Promise<iNotification[]> {
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);
    const notifications: Notification[] = [];

    const querySnapshot = await getDocs(collection(firestore, "notification"));
    querySnapshot.forEach((doc) => {
        const notification = doc.data() as Notification;
        notification.id = doc.id;
        notifications.push(notification);
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
    });
    return notifications;
  }

  async Add(user: User){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try{
        //method 1
        const doc = await addDoc(collection(firestore, "users"), {
        //   flavor: user.flavor,
        //   price: user.price,
        //   addOns: user.addOns,
        //   whatAddOns: user.whatAddOns,
        //   mobileNum: user.mobileNum
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

  async AddNotif(){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try{
        const doc = await addDoc(collection(firestore, "notification"), {
          message: localStorage.getItem('notificationMessage')
        });

        console.log("Document written with ID: ", doc.id)
        
    } catch (e) {
        console.error("Error adding Document: ", e)
    }
  }

  async Update(user: User){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try{
        const docRef = doc(firestore, "users", user.id);
        await updateDoc(docRef, {
        //   flavor: user.flavor,
        //   price: user.price,
        //   addOns: user.addOns,
        //   whatAddOns: user.whatAddOns,
        //   mobileNum: user.mobileNum
            // firstName: user.firstName,
            // middleName: user.middleName,
            // lastName: user.lastName,
        })
    } catch (e) {
        console.error("Error adding Document: ", e)
    }
  }

  async Delete(user: User){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try{
        const docu = doc(firestore, "users", user.id)
        await deleteDoc(docu);
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