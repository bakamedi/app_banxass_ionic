import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { SessionProvider } from '../../providers/session/session';

/**
 * Generated class for the SessionListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-session-list',
  templateUrl: 'session-list.html',
})
export class SessionListPage {

  loader;
  sessionsList = undefined;
  existResult: boolean = false;

  constructor(
    public loadingCtrl: LoadingController,
    private userProvider: UserProvider,
    private sessionProvider: SessionProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
      
    this.loader = this.loadingMensaje("Cargando Sesiones..");
    this.loader.present();
    this.getSessions();
    this.loader.dismiss();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SessionListPage');
  }

  getSessions(){
    this.sessionProvider.getSessions().subscribe( sessions => {
      if(sessions != undefined){
        this.existResult = true;
        this.sessionsList = sessions;
      }
      //console.log("----->"+this.usersResult.length)
      console.log(sessions);
    }, error => {
      console.log(error);
    });
  }

  selectSession(session){
    console.log(session.NAME);
    this.userProvider.setSessionUser(session);
    this.navCtrl.pop();
  }

  loadingMensaje(message) {
    return this.loadingCtrl.create({
      content: message,
    });
  }

  goBack(): void {
    this.navCtrl.pop();
  }


}
