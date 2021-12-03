import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestData } from './models/RequestModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  allRequests:RequestData[] = null;
  auth_token:string = "";
  constructor( private http:HttpClient) { }
  getRequests(auth_token:string):Observable<any>{
    return this.http.get<Observable<any>>("http://localhost:8000/getRequests?auth_token=" + auth_token);
  }
  login():Observable<any>{
    return this.http.get<Observable<any>>("http://localhost:8000/login");
  }
}
