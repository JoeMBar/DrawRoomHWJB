import { NgModule, Injectable, Inject } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public fireAuth: any;
  public userProfile: any;

  constructor() {

    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users');
    //.ref('users');



    console.log('Hello AuthProvider Provider');
  }
  /////////////////////////////////////////////////////////////////////////////////////////

  loginUser(email: string, password: string): firebase.Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  /////////////////////////////////////////////////////////////////////////////////////////

  signupUser(email: string, password: string): firebase.Promise<any> {
    //Creates new user
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(newUser => {
        //If account created signs them in
        firebase.database().ref('/userProfile').child(newUser.uid)
          .set({ email: email });
      });
  }
  /////////////////////////////////////////////////////////////////////////////////////////
  //Onlt takes in an email and sends password reset email
  resetPassword(email: string): firebase.Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }
  /////////////////////////////////////////////////////////////////////////////////////////
  logoutUser(): firebase.Promise<void> {
    return firebase.auth().signOut();
  }

}
