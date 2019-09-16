import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapidogService {
  public imageid
  constructor(private dog:HttpClient, private dogsDetail:HttpClient) { }
  
  getDogs(){
    return this.dog.get('https://api.thedogapi.com/v1/images/search/?limit=50&has_breeds=true&size=small&mime_types=jpg');
  }
  getDogsDetails(imageid){
    this.imageid=imageid;
    return this.dog.get(`https://api.thedogapi.com/v1/images/${this.imageid}/breeds`);
  }
   getDogSearchImg(){
    return this.dog.get(`https://api.thedogapi.com/v1/images/${this.imageid}`);
   }
}
