const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/Ashoka1');

const userschema=new mongoose.Schema({
    name:String,
    email:String,
    Age:Number
});


module.exports=mongoose.model('user',userschema);

