import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  private userKey: string = 'USER';
  private clientKey: string = 'CLIENT';

  constructor(
    public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  // guarda datos en el dispositovo
  saveDataDevice(data): void {
    localStorage.setItem(this.userKey, data.user);  
    localStorage.setItem(this.clientKey, data.client);
  }

  // cerrar sesion
  removeDataDevice(): void {
    localStorage.removeItem(this.userKey);
    localStorage.removeItem(this.clientKey);
  }

  verifyUser(){
    if( localStorage.getItem(this.userKey) && localStorage.getItem(this.clientKey) ){
      return true;
    }else{
      return false;
    }
  }

}
