import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../produto';



@Pipe({ name: 'limitTo' })
export class LimitToProductPipe implements PipeTransform {
  transform(produtos: Produto[]) {
    
    return produtos.filter(produto => 
        produto.indice>30
    );
  }
}