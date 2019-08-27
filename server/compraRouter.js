const express = require('express');
const compraRouter = express.Router();
const Compra = require('./model/Compra')
compraRouter.get('/', (req, res) => {
    console.log('Aqui');
    Product.find({}, (err, produtos) => {
        if (err) {
            throw (err);
        } else {
            console.log(produtos);
            res.json({
                'produto': produtos
            });
        }
    });
});
compraRouter.post('/', (req, res) => {

    var produtoJSON = JSON.parse(req.body.compra);

    compra = new Compra();
    compra.produtos = produtoJSON.produtos;
    compra.usuario = JSON.parse(produtoJSON.usuario);
    compra.valor = produtoJSON.valor;
    compra.save((err, compra) => {
        if (err) {
            console.log(err);
            res.json({
                'error': err,
            })
        }
        if (compra) {
            res.json({
                'success': 'Compra realizada com sucesso',
            })
        }
    });
})
module.exports = compraRouter;