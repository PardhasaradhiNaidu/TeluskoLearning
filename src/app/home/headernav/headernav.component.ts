import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-headernav',
  templateUrl: './headernav.component.html',
  styleUrls: ['./headernav.component.css']
})
export class HeadernavComponent implements OnInit {

  sidevavOpen = false;

  constructor(private loginService: LoginService) { }
  firstName;
  side = false;

  ngOnInit() {
    console.log('headers', this.loginService.currentUser)
    this.firstName = this.loginService.currentUser['firstName'];
    this.loginService.messages$.subscribe(data => {


      if (data == 'sideNavPardha' && this.sidevavOpen) {
        this.side = !this.side
        this.sidevavOpen = !this.sidevavOpen
      }

    })

  }


  openNav() {
    this.sidevavOpen = !this.sidevavOpen
    if (this.sidevavOpen) {
      this.side = !this.side
      document.getElementById("mySidenav").style.width = "230px";
    } else {
      this.side = !this.side
      document.getElementById("mySidenav").style.width = "0";
    }


  }


}
