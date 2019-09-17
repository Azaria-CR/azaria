import { Component, OnInit } from '@angular/core';
import {RestapidogService} from '../restapidog.service';
import {Router} from '@angular/router';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    dogs:object;
    public breakpoint;
  constructor(private _http:RestapidogService, private router:Router) { }

  ngOnInit() {
    this._http.getDogs().subscribe(data =>{
      this.dogs =data;
      console.log(this.dogs);
    });
    this.breakpoint = (window.innerWidth <= 400) ? 1:3; 
  }
  OnSelect(id){
   this.router.navigate(['/list',id]);
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }
}
