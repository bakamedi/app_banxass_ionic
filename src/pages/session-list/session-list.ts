import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserListProvider } from '../../providers/user-list/user-list';
import { UserProvider } from '../../providers/user/user';

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
  usersList;

  constructor(
    public loadingCtrl: LoadingController,
    private userProvider: UserProvider,
    private userListProvider: UserListProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.loader = this.loadingMensaje("Cargando Usuarios..");
      this.loader.present();
      this.getUsers();
      this.loader.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SessionListPage');
  }

  getUsers(){
    this.userListProvider.getUserByType().subscribe( users => {
      this.usersList = users;
      console.log(users);
    }, error => {
      console.log(error);
    });
  }

  selectUser(user){
    console.log(user.CLIENT);
    this.userProvider.setSessionUserString(user.CLIENT);
    this.navCtrl.pop();
  }

  loadingMensaje(message) {
    return this.loadingCtrl.create({
      content: message,
    });
  }

}
