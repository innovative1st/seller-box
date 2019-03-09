import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {InentoryIan} from './inentory-ian';
@Injectable({
  providedIn: 'root'
})
export class VirtualInventoryService {
  private baseUrl: String = 'http://localhost:8080/rest/ian';
  private headers = new Headers({'Content-Type' : 'application/json'});
  private options = new RequestOptions({headers: this.headers});
  private inentoryIan: InentoryIan;
  constructor(private _http: HttpClient) { }

 /**  getListOfIan() {
    return this._http.get(this.baseUrl + '/all', this.options).map((response: Response) => response.json())
    .catch(this.errorHandler);
 }*/


 getlistIanOther() {
  return this._http.get(this.baseUrl + '/all');
 }

    getListOfIan(page: number) {
      return this._http.get(this.baseUrl + '/alllist?page=' + page);
    }

    errorHandler(error: Response) {
      return Observable.throw(error || 'Server Error');
    }
    setter(inentoryIan: InentoryIan) {
      this.inentoryIan = inentoryIan;
    }
    getter() {
      return this.inentoryIan;
    }
}
