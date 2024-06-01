import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { HomePage } from './home/home.page';
import { ModalComponent } from './home/modal/modal.component';

import { getFirestore } from 'firebase/firestore';
import { ContentComponent } from './home/dashboard/content/content.component';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './home/dashboard/content/comment/comment.component';
import { InfoComponent } from './home/profile/info/info.component';
import { DashboardPage } from './home/dashboard/dashboard.page';

@NgModule({
  declarations: [AppComponent, ModalComponent, ContentComponent, CommentComponent, InfoComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  app = initializeApp(environment.firebaseConfig);
  firestore = getFirestore(this.app);
}
