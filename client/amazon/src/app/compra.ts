import { Produto } from './produto';

export class Compra {
    constructor(){
        this.produtos = [];
        this.usuario = '';
        this.valor = 0;
    }
    produtos: Produto[];
    usuario: string;
    valor: number;
    atualizaValor(){
        this.valor = 0;
        this.produtos.forEach(produto=>{
            
            this.valor+=produto.preco;
        })
    }
}
