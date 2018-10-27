import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Events, AlertController } from 'ionic-angular';
/*
  Generated class for the ConnectivityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export enum ConnectionStatusEnum {
  Online,
  Offline
}

@Injectable()
export class ConnectivityProvider {

  
  previousStatus;

  constructor(public alertCtrl: AlertController, 
              public network: Network,
              public eventCtrl: Events) {

    console.log('Hello NetworkProvider Provider');

    this.previousStatus = ConnectionStatusEnum.Online;
    
  }

  public initializeNetworkEvents(): void {
    this.network.onDisconnect().subscribe(() => {
      if (this.previousStatus === ConnectionStatusEnum.Online) {
        this.eventCtrl.publish('network:offline');
        this.alertCtrl.create();
        console.log("off");
      }
      this.previousStatus = ConnectionStatusEnum.Offline;
    });
    this.network.onConnect().subscribe(() => {
      if (this.previousStatus === ConnectionStatusEnum.Offline) {
        this.eventCtrl.publish('network:online');
        this.alertCtrl.create();
        console.log("on");
      }
      this.previousStatus = ConnectionStatusEnum.Online;
    });
  }
}
