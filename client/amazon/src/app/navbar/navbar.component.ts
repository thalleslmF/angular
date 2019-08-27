import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 
  searchTerm:String = '';
  constructor(private search:SearchService) {

   }
  mudaValor(){
    this.search.busca = this.searchTerm;
    console.log(this.search.busca);
    console.log(this.searchTerm);
  }
  ngOnInit() {
  }
  get token(){
    
    return localStorage.getItem("token");
  }
  get login(){
    return localStorage.getItem("user");
  }
}
