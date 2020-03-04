import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-headernav',
  templateUrl: './headernav.component.html',
  styleUrls: ['./headernav.component.css']
})
export class HeadernavComponent implements OnInit {

  constructor(private loginService:LoginService) { }
firstName;
  ngOnInit() {
   console.log('headers',this.loginService.currentUser)
  this.firstName =this.loginService.currentUser['firstName']
  }


  openNav(){
    document.getElementById("mySidenav").style.width = "230px";
   
    
    
  }
  

}
