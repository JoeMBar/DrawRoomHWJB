import { NgModule,Injectable, Inject } from '@angular/core';
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

  signupUser(email: string,password: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);

  }

}
