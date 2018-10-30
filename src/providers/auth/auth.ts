import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from '../global/global';
import { UserProvider } from '../user/user';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  private user = {
    CLIENT: "",
    USER: ""
  }
  
  private reqOpts;
  private loggedIn: boolean = false;
  
  constructor(
    private userProvider: UserProvider,
    private gv: GlobalProvider,
    private http: HttpClient) {
    console.log('Hello AuthProvider Provider');
    this.reqOpts = this._initializeReqOpts(this.reqOpts);
    this.reqOpts = this. _addStandardHeaders(this.reqOpts.headers);
  }

  private _addStandardHeaders(header:HttpHeaders){
    header = header.append('Content-Type','application/json');
    header = header.append('Accept','application/json');
    return header;
  }

  private _initializeReqOpts(reqOpts){
    if (!reqOpts) {
      reqOpts = {
       headers: new HttpHeaders(),
       params: new HttpParams()
      };
    }
    return reqOpts;
  }

  loginUser(formLogin){
    return this.http.post(""+this.gv.getApiLogin()+"", formLogin.value, this.reqOpts)
      .map(data =>{
        if(data['logIn']){
          this.loggedIn = false;
          return this.loggedIn;
        }
        this.userProvider.saveDataDevice(data);
        this.loggedIn = true;
        return this.loggedIn;
      },error => {
        console.log(error);
        this.loggedIn = false;
        return this.loggedIn;
      }
    );
  }

  logOut() {
    this.user.CLIENT = this.userProvider.getClient();
    this.user.USER = this.userProvider.getUser();
    return this.http.post(""+this.gv.getApiLogOut()+"", this.user, this.reqOpts)
      .map( data => {
        this.userProvider.removeDataDevice();
        this.loggedIn = false;
        //console.log(data);
      }, error => {
        console.log(error);
      });
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

}
