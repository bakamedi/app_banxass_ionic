import { Component, ViewChild } from '@angular/core';
import { Platform, Nav ,LoadingController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  //rootPage:any = HomePage;
  rootPage:any = LoginPage;
  public loader;
  public userName: string;

  constructor(
    private userProvider: UserProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private authProvider: AuthProvider,
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.setProfileName();
      console.log(this.userName);
      this.checkPreviousAuthorization();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  checkPreviousAuthorization(): void {
    //console.log("AAAAAAAAAAAAAAAAAAAAA");
    //console.log(this.authProvider.isLoggedIn());
    this.loader = this.loadingMessage("Espere..");
    setTimeout(()=>{
      if( localStorage.getItem('USER')) {
        this.setProfileName();
        this.rootPage = HomePage;
        this.nav.setRoot(HomePage, {}, { animate: true });
      } else {
        this.rootPage = LoginPage;
      }
      this.loader.dismiss();
    }, 0);
  }

  logOut(): void{
    this.loader = this.loadingMessage('Cerrando Sesión Espere...');
    this.loader.present().then(() => {
      this.authProvider.logOut().subscribe( () => {
        setTimeout(()=>{
          this.userName = "";
          this.nav.setRoot(LoginPage, {}, { animate: true });
          this.nav.popToRoot();
          this.loader.dismiss();
        }, 2000);
        //console.log(response);
      }, error => {
        console.log(error);
        this.loader.dismiss();
      });
    });
  }



  loadingMessage(message) {
    return this.loadingCtrl.create({
      content: message,
    });
  }

  alertMessage(): void {
    let alert = this.alertCtrl.create({
      title: 'Alerta',
      message: '¿Está seguro que desea cerrar la sesión?',
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

  private setProfileName(): void{
    this.userName = this.userProvider.getUser();
  }

  openMenu(): void{
    console.log("++++++++++++++++");
    this.setProfileName();
  }

  swipeEvent(event){
    this.setProfileName();
    console.log('----------------');
  }

}

