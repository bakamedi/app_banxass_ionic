import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, MenuController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loader;
  formLogin: FormGroup;
	loginError: string;

	constructor(
    public alertCtrl: AlertController,
    private menu: MenuController,
    private authProvider: AuthProvider,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
		public loginBuilder: FormBuilder,
	) {
    this.hideMenu();
		this.createFormLogin();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  createFormLogin(): void {
    this.formLogin = this.loginBuilder.group({
        CLIENT:  ['bakke', Validators.required],
        USER: ['bakamedi', Validators.required],
        PASSWORD: ['123456', Validators.required]
    });
  }

  login(): void{
    this.loader = this.loadingMensaje('Iniciando Sesion Espere...');
    this.loader.present();
    this.authProvider.loginUser(this.formLogin).subscribe( logged => {
      if(logged){
        setTimeout(()=>{
          this.loader.dismiss();
          this.navCtrl.setRoot(HomePage, {}, { animate: true });  // GO TO HOME PAGE
        }, 2000);
        //console.log(localStorage.getItem('USER'));
        //console.log(logged);
      }else{
        this.loader.dismiss();
        this.alert("Este usuario ya esta Logeado en otro dispositivo");
      }
    }, error => {
      this.loader.dismiss();
      this.alert("Usuario o Contraseña invalida");
      console.log(error);
    });
  }

  hideMenu(): void {
    this.menu.enable(false);
  }

  alert(message): void {
    let alert = this.alertCtrl.create({
      title: 'Error',
      message: message,
      buttons: ['ok']
    });
    alert.present();
  }

  loadingMensaje(message) {
    return this.loadingCtrl.create({
      content: message,
    });
  }

}
