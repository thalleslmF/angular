const express = require('express');
const morgan = require('morgan');
const app = express();
const usersRouter = require('./usersRouter');
const cors = require('cors');
const mongoose = require('mongoose');
const productRouter = require('./productRouter');
const compraRouter = require('./compraRouter');
app.use(express.json())
app.use(express.urlencoded({extended : false}));
app.use(cors());
mongoose.connect('mongodb://localhost:27017/teste',function(err,conn){
    if(err){
        throw(err);
    }else{
        console.log('Conectadah'+conn);
    }
});
app.use('/comprar',compraRouter);
app.use('/products',productRouter);
app.use('/',usersRouter);
app.listen(3000,'localhost',(req,res)=>{
    console.log('Roda menino...');
})