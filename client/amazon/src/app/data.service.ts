import { Injectable } from '@angular/core';
import {NavigationStart,Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  typeMessage =  'danger';
  message = '';
  constructor(private router:Router) {
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationStart){
        this.message = '';
      }
    })
   }
   success(message){
     this.typeMessage =  'success';
     this.message = message;
   }
   error(message){
    this.typeMessage =  'danger';
    this.message = message;
  }
}
