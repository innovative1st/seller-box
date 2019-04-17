import { Injectable, Inject } from '@angular/core';
import {SESSION_STORAGE, StorageService} from 'angular-webstorage-service';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //const arr: Array<{uid: number, id: number, text: string}> = [
  //auth_token: string ="test";

  test: string[];
 //type MyArrayType = Array<{guid: string, token: string}>;
  //guid: string ="1234567";
  //token: string ="murad";
  private READY_TO_PICK_API = 'http://192.168.2.171:8086/sellerbox/order/readyToShip';

  constructor(private storage: StorageService, private http: HttpClient){ }


  // Fetching all the products from the database
getReadyToShip(type): Observable<any> {
  const myheader = new HttpHeaders().set('AUTH_TOKEN', type);
  return this.http.post<any>(this.READY_TO_PICK_API,null, {headers: myheader});
}

// Authentication Methods
public isAuthenticated(): boolean {
  return this.getToken() !== null;
}


getToken() {
 // return this.token && this.guid;
}

updateCart(guid: string, token: number, quant: number): Observable<any> {
  const myheader = new HttpHeaders().set('AUTH_TOKEN', guid);
  return this.http.get<any>(this.READY_TO_PICK_API + '?bufcartid=' + token + '&quantity=' + quant, {headers: myheader});
}

}
