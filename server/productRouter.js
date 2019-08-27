const express = require('express');
const productRouter = express.Router();
const User = require('./model/user');
const jwt = require('jsonwebtoken');
const secret  = require('./secret.js');
const Product = require('./model/Product');
productRouter.get('/',(req,res)=>{
    console.log('Aqui');
    Product.find({},(err,produtos)=>{
        if(err)
        {
            throw(err);
        }else{
         
          res.json({
              'produto' : produtos
          });
        }
    });
});
productRouter.post('/',(req,res)=>{
    var produtoJSON = JSON.parse(req.body.produto);
   
   

     produto = new Product();
     produto.titulo = produtoJSON.nome;
     produto.descricao = produtoJSON.descricao;
     produto.preco = produtoJSON.preco;
     produto.imagem = produtoJSON.url;
     produto.save();
     res.json({
         'success' : 'Dados inseridos com sucesso',
     })
})
module.exports = productRouter;