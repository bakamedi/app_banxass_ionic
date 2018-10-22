import { Component } from '@angular/core';
import { NavController, ModalController, MenuController } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  constructor(
    private menu: MenuController,
    public modalCtrl: ModalController,
    public navCtrl: NavController) {
      this.showMenu()
  }

  openModalSearch(){
    console.log('modal');
    const modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }

  showMenu(): void {
    this.menu.enable(true);
  }

}
