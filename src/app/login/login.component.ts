import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { compileBaseDefFromMetadata } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
constructor(private http:HttpClient, private route:Router){

}
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required]),
    password: new FormControl('', [
      Validators.required]),
  });
  errMsg = '';
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
  

  ngOnInit() {

 
  }
ar:any[]
  onSubmit() {
    console.log("@submit", event);
    console.log("login values are pardha", this.loginForm.value);
  
 this.http.get('assets/loginData.json').subscribe(data=>{
   console.log(data)
this.ar=Object.assign([],data)

   for(let i=0;i<this.ar.length;i++){
     console.log(i)
   
   if(this.loginForm.value.username.toLowerCase()==data[i]['username']&&
   this.loginForm.value.password==data[i]['password']){
    this.route.navigate(['home'])
   }else console.log(false)
 }})
 
}
}