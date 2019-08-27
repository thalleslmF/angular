import {Pipe,PipeTransform} from '@angular/core';
import {Produto} from '../produto';


@Pipe({
    name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform{
    transform(produtos:any,search:any){
        if(!produtos){
            return []
        }
        if(!search){
            return produtos;
        }
        return produtos.filter(produto=>{
            
           return JSON.stringify(produto.titulo).toLowerCase().includes(search);
        })
    }
}
