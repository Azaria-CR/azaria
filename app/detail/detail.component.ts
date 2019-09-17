import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RestapidogService} from '../restapidog.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
 public username;
 dogs:object
 public img_dog;
 public img_src;
 public breakpoint;

  constructor(private _http:RestapidogService,private route:ActivatedRoute ) { }

  ngOnInit() {
    let id =this.route.snapshot.paramMap.get('id');
    this.username=id;
    this._http.getDogsDetails(id).subscribe(data =>{
        this.dogs =data;  
      console.log(this.dogs);
      this.breakpoint = (window.innerWidth <= 400) ? 0:2; 
    });

    this._http.getDogSearchImg().subscribe(data =>{
      this.img_dog =data;  
      this.img_src =this.img_dog.url;
       console.log(this.img_src);
  });
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 0:2;
  }
}
