import { NgModule,Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth'

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { PostsPage } from '../pages/posts/posts';
import { signupPage } from '../pages/signup/signup';

import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import firebase from 'firebase';
import { FirebaseConfig } from '../app/app.module'

@Component({

  templateUrl: 'app.html',
  providers:[AuthProvider]
})
export class MyApp {

public rootPage: any ;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

  // Initialize Firebase

  firebase.initializeApp(FirebaseConfig);

const Unsubscribe = firebase.auth().onAuthStateChanged((user) => {
   if(!user){
     this.rootPage = LoginPage;
     Unsubscribe();
   }
   else {
     this.rootPage= TabsPage;
     Unsubscribe();
   }


});




    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
