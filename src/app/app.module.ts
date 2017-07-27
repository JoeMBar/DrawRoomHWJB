import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { PostsPage } from '../pages/posts/posts';
import { signupPage } from '../pages/signup/signup';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
//import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2'
import { AuthProvider } from '../providers/auth/auth';

export const FirebaseConfig = {
  apiKey: "AIzaSyBvBIAwdF2AR0oMk1ZuCkc5Prco3MY_jnk",
  authDomain: "mydrawingrooma.firebaseapp.com",
  databaseURL: "https://mydrawingrooma.firebaseio.com",
  projectId: "mydrawingrooma",
  storageBucket: "mydrawingrooma.appspot.com",
  messagingSenderId: "374172794405"
};
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    signupPage,
    ResetPasswordPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    signupPage,
    ResetPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
