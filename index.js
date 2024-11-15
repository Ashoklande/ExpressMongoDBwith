const express=require('express');
const usermodel=require('./Usermodel');


const app=express();


// app.use(express.json());
// app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send('Welcome');
});

app.get('/create',async(req,res)=>{
    
    let usercreate= await usermodel.create({
        name:'Ashok Lande',
        email:'@gmail.com',
        Age:20,
    });


    res.send(usercreate);
});


app.get('/find',async(req,res)=>{
    let userone=await usermodel.findOne({Age:20});

    res.send(userone);
})
app.listen(3000,function(){
    console.log('Server start');
})