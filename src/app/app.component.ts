import { Component } from '@angular/core';
import { Router } from '@angular/router';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-project';

  // TODO: Replace the following with your app's Firebase project configuration
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  firebaseConfig = {
    // ...
    apiKey: "AIzaSyDZDhVqrtrvlPD9-cguDATh-SwTvIqoVD0",
    authDomain: "fir-app-d401e.firebaseapp.com",
    databaseURL: "https://fir-app-d401e-default-rtdb.firebaseio.com",
    projectId: "fir-app-d401e",
    storageBucket: "fir-app-d401e.appspot.com",
    messagingSenderId: "314412474586",
    appId: "1:314412474586:web:f80d8a05de2e9afae585e3",
    measurementId: "G-10VPZV6TBD"
  };
  constructor(
    private router: Router
  ) {

    // Initialize Firebase
    firebase.initializeApp(this.firebaseConfig);

    console.log(firebase.app().name);  // "[DEFAULT]"

  }

  public goToAddUser() {
    this.router.navigate(['./user-from']);
  }
  public goToUserList() {
    this.router.navigate(['./user-list']);
  }

}
