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
  private userSessionKey: string = 'SESSION_TEMP';

  constructor() {
    console.log('Hello UserProvider Provider');
  }

  // guarda datos en el dispositovo
  saveDataDevice(data): void {
    console.log(data);
    localStorage.setItem(this.userKey, data.USER);  
    localStorage.setItem(this.clientKey, data.CLIENT);
    localStorage.setItem(this.userSessionKey, "Buscar una Sesion");
  }

  // cerrar sesion
  removeDataDevice(): void {
    localStorage.removeItem(this.userKey);
    localStorage.removeItem(this.clientKey);
    localStorage.removeItem(this.userSessionKey);
  }

  verifyUser(){
    if( localStorage.getItem(this.userKey) && localStorage.getItem(this.clientKey) ){
      return true;
    }else{
      return false;
    }
  }

  getClient(): string{
    return localStorage.getItem(this.clientKey);
  }

  getUser(){
    return localStorage.getItem(this.userKey);
  }

  getSessionUserString(): string{
    return localStorage.getItem(this.userSessionKey);
  }

  setSessionUserString(userTempSession: string): void{
    localStorage.setItem(this.userSessionKey, userTempSession);
  }

}
