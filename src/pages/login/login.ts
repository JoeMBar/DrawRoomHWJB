import { NgModule, Component, Injector } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { signupPage } from '../signup/signup';
import { ResetPasswordPage} from '../reset-password/reset-password';

//import { signupPage } from '../src/pages/signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

})
export class LoginPage {

  public emailField: any;
  public passwordField: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.emailField = "";

  }

  submitLogin() {



  }
goToSignup(){
  let signupmodal = this.modalCtrl.create(signupPage);
  signupmodal.present();

}
submitResetPassword(){
  this.navCtrl.push(ResetPasswordPage, {
  });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
