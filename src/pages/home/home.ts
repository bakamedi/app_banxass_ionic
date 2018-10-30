import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, MenuController, LoadingController, Platform, FabContainer, Content } from 'ionic-angular';
import { SearchPage } from '../search/search';

import { UserProvider } from '../../providers/user/user';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { PdfStorageProvider } from '../../providers/pdf-storage/pdf-storage';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild(Content) content: Content;
	@ViewChild('fab')fab : FabContainer;
	public loader;
	isSearch = false;
	isNotFound = false;
	flagSearch = false;
	items = [];

	outBtnKG = false;
	colorBtnKG = true;
	colorBtnLB = false;
	outBtnLB = true;

	searchResult;

	constructor(
		private pdfProvider: PdfStorageProvider,
		private plt: Platform,
		public loadingCtrl: LoadingController,
		private userProvider: UserProvider,
		private menu: MenuController,
		public modalCtrl: ModalController,
		public navCtrl: NavController) {
			this.loader = this.loadingMensaje("");
			this.loader.present();
			this.showMenu()
			this.loader.dismiss();
	}

	changeWeight(num, event, fab: FabContainer): void{
		// presiono btnOutLB
		if(num == 1){
			this.colorBtnKG = true;
			this.outBtnKG = false;

			this.colorBtnLB = false;
			this.outBtnLB = true;
			this.getSearch();

			fab.close();
		}
		// presiono btnOutLB
		else if(num == 2){
			this.colorBtnKG = false;
			this.outBtnKG = true;

			this.colorBtnLB = true;
			this.outBtnLB = false;
			this.getSearch();

			fab.close();
		}

		fab.close();
	}

	ionViewWillUnload(){
		this.userProvider.clearUserSearch();
	}

	openModalSearch(): void{
		setTimeout(()=>{
			const modal = this.modalCtrl.create(SearchPage);
			modal.present();
			modal.onDidDismiss(() => {
				this.loader = this.loadingMensaje("Buscando..");
				this.flagSearch = this.userProvider.getFlagEmptySearch();
				console.log(this.flagSearch);
				if(this.flagSearch){
					this.isSearch = false;	
				}else{
					this.loader.present();
					this.searchResult =  this.userProvider.getWeighing();
					if(this.searchResult){
						this.isSearch = true;
						this.isNotFound = false;
					}
					if(this.isEmptyObject(this.searchResult)){
						console.log();
						this.isNotFound = true;
						this.isSearch = false;
					}
					this.loader.dismiss();
				}
			});
		}, 500);
	}

	getSearch(): void{
		this.searchResult = this.userProvider.getWeighing();
	}

	showMenu(): void {
		this.menu.enable(true);
	}

	isEmptyObject(obj) {
		return (obj && (Object.keys(obj).length === 0));
	}

	loadingMensaje(message) {
		return this.loadingCtrl.create({
		content: message,
		});
	}

	downloadPdf(fab: FabContainer): void{
		this.loader = this.loadingMensaje('Construyendo Pdf...');
		this.pdfProvider.setInstacePdf(this.userProvider.getUser());
		if(this.plt.is('cordova')){
			//abre dependiendo del dispositivo
			this.pdfProvider.opened();
		}else{
			this.pdfProvider.download(this.searchResult);
			//this.pdfObj.download();
			fab.close();
			this.loader.dismiss();
		}
	}

	closeFab(event, fab: FabContainer): void{
		fab.close();
	}

}
