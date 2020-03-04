import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  public host:string;
  constructor(private http:HttpClient) { 
    this.host = 'http://employemanagment-env.6dpm2iqwkd.ap-south-1.elasticbeanstalk.com:8080';
  }

  public forgetId='';
 
  get(url):Observable<any> {
   url = this.host+url;
    return this.http.get(url);
  }

  post(url,data):Observable<any> {
    url = this.host+url;
    return this.http.post(url,data);
  }

  delete(url):Observable<any> {
    url = this.host+url;
    return this.http.delete(url);

  }
  put(url,data):Observable<any> {
    url = this.host+url;
    return this.http.put(url,data);

  }
  edit(url,data){
    url=this.host+url;
    return this.http.put(url,data);
  }
}
