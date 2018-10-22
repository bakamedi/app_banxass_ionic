import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionListPage } from '../session-list/session-list';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  session: string;
  formSearch: FormGroup;

  constructor(
    private userProvider: UserProvider,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public searchBuilder: FormBuilder) {
    this.createFormSearch("");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.session = this.userProvider.getSessionUserString();
  }

  ionViewCanEnter(){
    this.formSearch.value["SESSION"] = this.userProvider.getSessionUserString();
    this.createFormSearch(this.userProvider.getSessionUserString());
    this.session = this.userProvider.getSessionUserString();
  }


  ionViewDidLeave(){
    this.userProvider.setSessionUserString("Buscar una Sesion");
  }

  createFormSearch(session){
    this.formSearch = this.searchBuilder.group({
      SESSION: [session, Validators.required],
      START_DATE: ['', Validators.required],
      END_DATE: ['', Validators.required],
      TYPE: ['', Validators.required]
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  search(){
    console.log(this.formSearch.value);
    this.navCtrl.pop();
  }

  selectSession(){
    this.navCtrl.push(SessionListPage);
  }

}
