import { Injectable } from '@angular/core';

import { addDoc, collection, getFirestore, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Assembly, Comset, News, User, iAssembly, iComset, iNews, iUser } from './home.model';
import { HomePage } from './home.page';
import { Information, Profile, iInfo, iProfile } from './profile/profile.model';
import { iNotification, Notification} from './notification/notification.model';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
  contentDo : boolean = true;
  comsetDo : boolean = true;
  pcassDo : boolean = true;
  itnewDo : boolean = true;

  ProfileContent: any[] = [];
  userId: string = '';
  userLink: string = '';
  userDesc: string = '';
  userMessage: string  = '';
  userReact: number = 0;
  userColor: string = '';


  constructor(
    private alertController: AlertController,
    private route: Router
  ) {}

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

    const querySnapshot = await getDocs(collection(firestore, "profile", ));
    querySnapshot.forEach((doc) => {
        const profile = doc.data() as Profile;
        profile.id = doc.id;
        profiles.push(profile);
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
    });
    return profiles;
  }

  async getInformation(): Promise<iInfo[]> {
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);
    const informations: Information[] = [];

    const querySnapshot = await getDocs(collection(firestore, "information"));
    querySnapshot.forEach((doc) => {
        const information = doc.data() as Information;
        information.id = doc.id;
        informations.push(information);
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
    });
    return informations;
  }

  async getComset(): Promise<iComset[]> {
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);
    const comsets: Comset[] = [];

    const querySnapshot = await getDocs(collection(firestore, "ComSet"));
    querySnapshot.forEach((doc) => {
        const comset = doc.data() as Comset;
        comset.id = doc.id;
        comsets.push(comset);
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
    });
    return comsets;
  }

  async getAssembly(): Promise<iAssembly[]> {
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);
    const assemb: Assembly[] = [];

    const querySnapshot = await getDocs(collection(firestore, "Assembly"));
    querySnapshot.forEach((doc) => {
        const assembly = doc.data() as Assembly;
        assembly.id = doc.id;
        assemb.push(assembly);
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
    });
    return assemb;
  }


  async getNews(): Promise<iNews[]> {
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);
    const news: News[] = [];

    const querySnapshot = await getDocs(collection(firestore, "News"));
    querySnapshot.forEach((doc) => {
        const newl = doc.data() as News;
        newl.id = doc.id;
        news.push(newl);
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
    });
    return news;
  }

  async getAccount(): Promise<iProfile[]> {
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);
    const profiles: Profile[] = [];

    const querySnapshot = await getDocs(collection(firestore, "account", ));
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

  async UpdateInformation(information: Information){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try{
        const docRef = doc(firestore, "information", information.id);
        await updateDoc(docRef, {
          name: information.name,
          bio: information.bio,
          age: information.age,
          gender: information.gender,
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

  openAll(){
    this.contentDo = true;
    this.comsetDo = true; 
    this.pcassDo = true;
    this.itnewDo = true;
    this.route.navigate(['home/dashboard'])
  }

  openComset(){
    this.contentDo = false;
    this.comsetDo = true; 
    this.pcassDo = false;
    this.itnewDo = false;
    this.route.navigate(['home/dashboard'])
    }

  openAssembly(){
    this.contentDo = false;
    this.comsetDo = false; 
    this.pcassDo = true;
    this.itnewDo = false;
    this.route.navigate(['home/dashboard'])
  }

  openNews(){
    this.contentDo = false;
    this.comsetDo = false; 
    this.pcassDo = false;
    this.itnewDo = true;
    this.route.navigate(['home/dashboard'])
  }

  getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
}

}