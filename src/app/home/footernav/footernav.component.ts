import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-footernav',
  templateUrl: './footernav.component.html',
  styleUrls: ['./footernav.component.css']
})
export class FooternavComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  
  ngOnInit() {
    
  }

}
