const express = require('express');
const usersRouter = express.Router();
const User = require('./model/user');
const jwt = require('jsonwebtoken');
const secret  = require('./secret.js');
usersRouter.get('/',(req,res)=>{
    res.send('Enviado');
});

usersRouter.post('/signup',(req,res,next)=>{
    console.log(secret.token);
    console.log(secret);
    var userSave = new User();
    console.log(req.body);
    userSave.password = req.body.password;
    userSave.email = req.body.email;
    userSave.name = req.body.name;
    console.log(userSave);
    User.findOne({
        email: req.body.email
    },function(err,user){
        if(err){
            throw(err);
        }
        else if(user){
            res.json({
                success : false,
                message : 'Usuário já cadastrado'
            })
        }
        else{
            userSave.save();
            var token = jwt.sign({
                user: user},
                secret.token,{
                    expiresIn:'7d'
            });
            res.json({
                success: true,
                msg : 'Cadastrado com sucesso',
                token: token
            });
        }
    });    
});
usersRouter.post('/login',(req,res,next)=>{
    
    var password = req.body.password;
    var email = req.body.email;
    User.findOne({
        email: email
    },function(err,user){
        console.log(user);
        if(err){
            throw(err);
        }
        else if(!user){
            res.json({
                success : false,
                message : 'Usuário ou senha invalidos'
            })
        }
        else{
            if(user.comparePassword(password)){
                var token = jwt.sign({
                    user: user},
                    secret.token,{
                        expiresIn:'7d'
                });
                res.json({
                    success: true,
                    msg : 'Logado com sucesso',
                    token: token,
                    user: JSON.stringify(user)
                });
            }else{
                res.json({  
                    success : false,
                    message : 'Usuário ou senha invalidos'
                })
            }
        }
    });    
});

module.exports = usersRouter;