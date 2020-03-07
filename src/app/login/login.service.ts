import { Injectable, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { BehaviorSubject } from 'rxjs';
import { model } from '../Model/model';


@Injectable()
export class LoginService  {

  subject = new BehaviorSubject('');
  public messages$ = this.subject.asObservable()
  
 
  constructor(private api: ApiService) { 

   

  }
  public currentUser = { name: 'pardha' };
  private loginUrl = '/employee/login';
  private forGetUrl = '';
  private creatUrl = '';
  onSubmit(data) {
    let loginUrl = this.loginUrl + "?employeeId=" + data.employeeId + "&password=" + data.password;
    console.log('currentUser', this.currentUser)
    console.log('this is pardha===>>>' + loginUrl);
    return this.api.get(loginUrl);

  }


 subjectMethod$(value){
   this.subject.next(value);
 }
  
  ngOnInit() {

  }



} 
