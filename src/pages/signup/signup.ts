import {NgModule, Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth'
import { HomePage } from '../home/home'
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the ResetPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [AuthProvider]
})
export class signupPage {

  public emailField: any;
  public passwordField: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private AuthProvider: AuthProvider, private LoadingController:LoadingController) {
  }

  signUserUp(){
    if( this.emailField != "" && this.passwordField != "" ){
  this.AuthProvider.signupUser(this.emailField, this.passwordField).then(authData => {
    this.navCtrl.setRoot(TabsPage);
  } , error => {

  })

}
else {
  alert("Please enter email and password!")
}
  }
  closeSignupPage() {

    this.viewCtrl.dismiss().catch(()=>{});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad signupPage');
  }

}
