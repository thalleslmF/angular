import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RestApiService} from '../rest-api.service'
import { Produto } from '../produto';

import { SearchService } from '../search.service';

import { Compra } from '../compra';
import { ChildActivationStart, Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  compra:Compra;
  products = [];
  isFaded=false;
  searchProducts:String;
  adicionado=false;
  constructor(private data:DataService,private http:RestApiService,private search:SearchService,private router:Router) {
       this.showProducts();
       this.compra = new Compra();
   }
     async enviaProdutos(){
          for (let index = 0; index < this.products.length; index++) {
            const produto = this.products[index];
            
            const data =   await this.http.post('http://localhost:3000/products',{
              'produto': JSON.stringify(produto)
            })
              if(data['success']){
                console.log(data);
              }else{
                console.log(data);
              }
          }
   }
   adicionaCarrinho(produto:Produto){
     this.compra.produtos.push(produto);
     this.compra.valor += produto.preco;
     console.log(this.compra);
     produto.adicionado=true;

   }
   removeCarrinho(produto:Produto){
      var filtered = this.compra.produtos.filter(filtro=>{
        

        return filtro.titulo !== produto.titulo;
      })
      this.compra.valor-=produto.preco;
      this.compra.produtos = filtered;
      this.compra.atualizaValor();
      console.log(this.compra);
      produto.adicionado=false;
   }
   getProducts() {
    return  this.http.get('http://localhost:3000/products');
   }
   verCarrinho(){
     this.search.compra = this.compra;
    this.router.navigate(['/compra']);
   }
   showProducts(){
     var i=0;
    this.getProducts().then(data=>{
      var productRequest  = data['produto'];
      this.products = productRequest;

    }
    
    );
   
  }

  ngOnInit() {
  }

}
