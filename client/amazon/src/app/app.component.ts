import { Component } from '@angular/core';
import { tokenName } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchTerm = '';
  isCollapsed = true;
  title = 'amazon';
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  token(){
    console.log(localStorage.getItem('token'));
    return localStorage.getItem("token");
  }
  collapse(){
    this.isCollapsed = true;
  }
}
