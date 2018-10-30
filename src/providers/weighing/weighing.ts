import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from '../global/global';

/*
  Generated class for the WeighingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeighingProvider {

  private reqOpts;

  constructor(
    private gv: GlobalProvider,
    private http: HttpClient
    ) {
    console.log('Hello WeighingProvider Provider');
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

  public getWeighing(formWeighing){
    return this.http.post(""+this.gv.getApiWeighingGet()+"", formWeighing.value ,this.reqOpts)
      .map( data => {
        return data;
      }, error => {
        console.log(error);
      });
  }

}
