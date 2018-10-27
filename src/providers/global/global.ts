import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

  private url:            string = "http://localhost:3000/api/";
  private apiAuth:        string = "auth/";
  private apiUser:        string = "user/";
  private apiSession:     string = "session/"
  private apiWeighing:    string = "weighing/";
  private login:          string = "login_user";
  private logOut:         string = "log_out_user";
  private usersType:      string = "users_type";
  //private sessionCreate:  string = "create_session";
  private sessionGet:     string = "get_sessions";
  private weighingGet:       string = "get_weighing";

  constructor() {
    console.log('Hello GlobalProvider Provider');
  }

  public getApiLogin(): string{
    return this.url+""+this.apiAuth+""+this.login;
  }

  public getApiLogOut(): string{
    return this.url+""+this.apiAuth+""+this.logOut;
  }

  public getApiUserType(): string{
    return this.url+""+this.apiUser+""+this.usersType;
  }

  public getApiSession(): string{
    return this.url+""+this.apiSession+""+this.sessionGet;
  }

  public getApiWeighingGet(): string{
    return this.url+""+this.apiWeighing+""+this.weighingGet;
  }


}
