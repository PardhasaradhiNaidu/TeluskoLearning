import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CommonService {
  postOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  };
  loginData: any;
  private addNewOrderUrl;
  constructor(private http: HttpClient) { }

  public sendLoginData(data): Observable<any> {
    console.log('logindata service',data);
    //  this.addNewOrderUrl ='http://localhost:8080/employee/login?employeeId='+data+'&password='+'';
     this.addNewOrderUrl ='http://localhost:8080/employee/login?employeeId='+data[0] +'&password='+ data[1];

    this.loginData = data;
    return this.http.get(
      this.addNewOrderUrl,
       this.postOptions
    );
  }
}
