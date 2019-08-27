const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CompraSchema  = mongoose.Schema({
    produtos: [Schema.Types.ObjectId],
    usuario : Schema.Types.ObjectId,
    valor : Number,
});
Compra = module.exports = mongoose.model('Compra',CompraSchema);