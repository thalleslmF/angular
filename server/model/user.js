const mongoose = require('mongoose');
const bcrypt  = require('bcrypt-nodejs');
const  userSchema = mongoose.Schema({
    name : String,
    email: {
        type:String,
        unique:true,
        lowercase:true,
    },
    password:String,
    picture:String,
    isSeller:
    {type:Boolean,default:false},
    address:{
        addr1:String,
        city:String,
        state: String,
        country:String, 
    },
});
userSchema.pre('save',function(next){
    var user = this;
    if(!user.isModified('password')){
        return next();
    }
    bcrypt.hash(user.password,null,null,function(err,hash){
        if(err){
            return next(err);
        }else{
            user.password = hash;
        }
        next();
    });
});
userSchema.methods.comparePassword = function(password){
   return  bcrypt.compareSync(password,this.password);
}

User = module.exports = mongoose.model('User',userSchema);