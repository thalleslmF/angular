import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {
  compra;
  constructor(private search:SearchService,private http:RestApiService,private data:DataService) {
    this.compra = search.compra;
    console.log(localStorage);
    this.compra.usuario = localStorage.getItem('user');

   }
   async confirmaCompra(){
    const data = await this.http.post('http://localhost:3000/comprar',{
      'compra': JSON.stringify(this.compra),
    })
    if(data['success']){
      console.log(data);
      this.data.message = data['success'];
      this.data.typeMessage = 'success';
    }else{
      console.log(data);
      this.data.message = data['error'];
      this.data.typeMessage = 'danger';
    }
   }
  ngOnInit() {
  }

}
