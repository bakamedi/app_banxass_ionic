import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from '../global/global';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserListProvider {

  reqOpts;
  //private options:RequestOptions = new RequestOptions({headers: this.headers });
  
  constructor(
    private gv: GlobalProvider,
    private http: HttpClient) {
    console.log('Hello AuthProvider Provider');
    this.reqOpts = this._initializeReqOpts(this.reqOpts);
    this.reqOpts = this. _addStandardHeaders(this.reqOpts.headers);
  }

  private _addStandardHeaders(header:HttpHeaders)
  {
    header = header.append('Content-Type','application/json');
    header = header.append('Accept','application/json');
    return header;
  }

  private _initializeReqOpts(reqOpts)
  {
    if (!reqOpts) {
      reqOpts = {
       headers: new HttpHeaders(),
       params: new HttpParams()
      };
    }
    return reqOpts;
  }

  getUserByType(){
    return this.http.get(""+this.gv.getApiUserType(), this.reqOpts)
      .map( data => {
        console.log(data);
        return data;
      },error => {
        console.log(error);
      });
  }

}
