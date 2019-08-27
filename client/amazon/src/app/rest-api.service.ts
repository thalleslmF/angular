import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  
  constructor(private http:HttpClient) {

    
  }
  get(link:string){
    return this.http.get(link).toPromise();
  }
  post(link:string,body:any){
    
    return this.http.post(link,body).toPromise();
  }
}
