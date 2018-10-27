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
  private userToken: string = 'TOKEN_USER';
  
  private userSessionName: string = 'SESSION_NAME';
  private userSessionStart: string = 'SESSION_START_DATE';
  private userSessionEnd: string = 'SESSION_END_DATE';
  private userSessionType: string = 'SESSION_TYPE';
  private userSearchWei: string = 'WEIGHING';
  private searchResult = [];
  private flagSearch = false;

  constructor() {
    console.log('Hello UserProvider Provider');
  }

  // guarda datos en el dispositovo
  saveDataDevice(data): void {
    //console.log(data);
    localStorage.setItem(this.userKey, data["user"].USER);
    localStorage.setItem(this.clientKey, data["user"].CLIENT);
    localStorage.setItem(this.userSessionName, "Buscar una Sesion");
    localStorage.setItem(this.userToken, data["token"]);
  }

  // cerrar sesion
  removeDataDevice(): void {
    localStorage.removeItem(this.userKey);
    localStorage.removeItem(this.clientKey);
    localStorage.removeItem(this.userSessionName);
    localStorage.removeItem(this.userToken);
    localStorage.removeItem(this.userSessionStart);
    localStorage.removeItem(this.userSessionEnd);
    localStorage.removeItem(this.userSessionType);
    localStorage.removeItem(this.userSearchWei);
    this.searchResult = [];
    this.flagSearch = false;
  }

  verifyUser(): boolean{
    if( localStorage.getItem(this.userKey) && localStorage.getItem(this.clientKey) ){
      return true;
    }else{
      return false;
    }
  }

  getClient(): string{
    return localStorage.getItem(this.clientKey);
  }

  getUser(): string{
    return localStorage.getItem(this.userKey);
  }

  getSessionUserString(): string{
    return localStorage.getItem(this.userSessionName);
  }

  getUserToken(): string {
    return localStorage.getItem(this.userToken);
  }

  setSessionName(sessionName: string): void{
    localStorage.setItem(this.userSessionName, sessionName);
  }

  setSessionUser(userTempSession): void{
    localStorage.setItem(this.userSessionName, userTempSession.NAME);
    localStorage.setItem(this.userSessionStart, userTempSession.START_DATE);
    localStorage.setItem(this.userSessionEnd, userTempSession.END_DATE);
    localStorage.setItem(this.userSessionType, userTempSession.TYPE);
  }

  setWeighing(searchWeighing): void{
    //localStorage.setItem(this.userSearchWei, searchWeighing);
    this.searchResult = searchWeighing;
  }

  getWeighing(){
    //return localStorage.getItem(this.userSearchWei);
    return this.searchResult;
  }

  clearUserSearch(): void{
    //localStorage.setItem(this.userSearchWei,"");
    this.searchResult = [];
  }

  setflagEmptySearch(flag: boolean): void{
    this.flagSearch = flag;
  }

  getFlagEmptySearch(): boolean{
    return this.flagSearch;
  }

}
