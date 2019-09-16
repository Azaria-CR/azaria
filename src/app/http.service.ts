import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http:HttpClient) { }

  getUsers(){
    return this.http.get('https://api.thedogapi.com/v1/breeds');
  }
}
