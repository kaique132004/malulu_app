import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

const firebase = {
  apiKey: "AIzaSyAUpwP02V7bXcp3dp-m2fRpXvXsrhX8mMc",
  authDomain: "malulu-a8953.firebaseapp.com",
  projectId: "malulu-a8953",
  storageBucket: "malulu-a8953.appspot.com",
  messagingSenderId: "376267368709",
  appId: "1:376267368709:web:81587d71e3b27c7894af6c"
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireAuthModule, AngularFireModule.initializeApp(firebase), AngularFireStorageModule, AngularFirestoreModule, AngularFireDatabaseModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
