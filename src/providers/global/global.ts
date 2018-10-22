import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

  private url: string = "http://localhost:3000/api/";
  private apiAuth: string = "auth/";
  private apiUser: string = "user/";
  private login: string = "login_user";
  private logOut: string = "log_out_user";
  private usersType: string = "users_type";

  constructor() {
    console.log('Hello GlobalProvider Provider');
  }

  public getApiLogin(): string{
    return this.url+""+this.apiAuth+""+this.login;
  }

  public getApiLogOut(): string{
    return this.url+""+this.apiAuth+""+this.logOut;
  }

  public getApiUserType(){
    return this.url+""+this.apiUser+""+this.usersType;
  }



}
