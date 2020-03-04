import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  

  constructor( private router:Router,private loginService:LoginService) { }

  ngOnInit() {
    
  }


  closeNav() {
    document.getElementById("mySidenav").style.width = "0";

    
  }

 
  

}
