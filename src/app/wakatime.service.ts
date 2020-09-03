import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WakatimeService {

  private url='http://13.234.194.160:3000/users/';


  constructor(private http:HttpClient) { }

  getuserList() : Observable<any> {
    return this.http.get(`${this.url}`);
  }

  getsquad(id) : Observable<any> {
    return this.http.get(`${this.url+'squad/'+id}`);
  }
}
