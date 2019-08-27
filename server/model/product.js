const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    imagem: String,
    titulo:String,
    descricao:String,
    preco:Number,
    reviews:[String]
 
});

Produto = module.exports =  mongoose.model('Produto',productSchema);