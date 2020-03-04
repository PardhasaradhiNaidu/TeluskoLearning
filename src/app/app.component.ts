import { Component, OnInit } from '@angular/core';

import { model } from './Model/model';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  public subject=new BehaviorSubject([]);
  message$=this.subject.asObservable()

  array:model[]=[{name:'pardha'},{name:'aamam'},{name:'manu'},]

ngOnInit(){

this.subject.next(this.array)
}
}

