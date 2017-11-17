import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from "angularfire2"
import { AngularFirestoreModule } from "angularfire2/firestore"

import { AppComponent } from './app.component';

export const config = {
    apiKey: "AIzaSyB4RxXCEF6CO7zqtrXzV6Q0VyrffwRV3G0",
    authDomain: "equipos-273b2.firebaseapp.com",
    databaseURL: "https://equipos-273b2.firebaseio.com",
    projectId: "equipos-273b2",
    storageBucket: "equipos-273b2.appspot.com",
    messagingSenderId: "357713986517"
  };


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	BrowserModule,
	AngularFireModule.initializeApp(config),
	AngularFirestoreModule.enablePersistence(),
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
