import { Component, ViewChild } from '@angular/core';
import { Platform, Nav ,LoadingController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  //rootPage:any = HomePage;
  rootPage:any = LoginPage;
  public loader;

  constructor(
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private authProvider: AuthProvider,
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.checkPreviousAuthorization();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  checkPreviousAuthorization(): void {
    //console.log("AAAAAAAAAAAAAAAAAAAAA");
    console.log(this.authProvider.isLoggedIn());
    if( localStorage.getItem('USER')) {
      this.rootPage = HomePage;
    } else {
      this.rootPage = LoginPage;
    }
  }

  logOut(): void{
    this.loader = this.loadingMessage('Cerrando Sesión Espere...');
    this.loader.present().then(() => {
      this.authProvider.logOut().subscribe( () => {
        this.nav.setRoot(LoginPage);
        this.nav.popToRoot();
        //console.log(response);
      }, error => {
        console.log(error);
      });
    });
    this.loader.dismiss();
  }



  loadingMessage(message) {
    return this.loadingCtrl.create({
      content: message,
    });
  }

  alertMessage() {
    let alert = this.alertCtrl.create({
      title: 'Alerta',
      message: '¿Está seguro que desea cerrar la sesión',
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si',
          handler: data => {
            this.logOut();
          }
        }
      ]
    });
    alert.present();
  }

}

