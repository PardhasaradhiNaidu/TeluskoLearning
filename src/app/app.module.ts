import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {CommonService} from './service/common.service';

import { LoginService } from './login/login.service';
import { ApiService } from './service/api.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule , ReactiveFormsModule  } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { HeadernavComponent } from './home/headernav/headernav.component';
import { SidenavComponent } from './home/sidenav/sidenav.component';
import { FooternavComponent } from './home/footernav/footernav.component';
import { ExpandMenu } from './home/sidenav/ExpandMenu';
import { MainContentComponent } from './home/main-content/main-content.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { DefaultComponent } from './home/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
 
 
    HomeComponent,
    HeadernavComponent,
    SidenavComponent,
    FooternavComponent,
    ExpandMenu,
    
    MainContentComponent,
  
    DefaultComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    
  ],
  providers: [CommonService,LoginService,ApiService,HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
