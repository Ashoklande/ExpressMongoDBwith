const express=require('express');
const usermodel=require('./Usermodel');


const app=express();


// app.use(express.json());
// app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send('Welcome');
});

app.get('/create',async(req,res)=>{
    //insering new user into mongodb
    let usercreate= await usermodel.create({
        name:'Ashok Lande',
        email:'@gmail.com',
        Age:20,
    });


    res.send(usercreate);
});

//finding user who's Age=20;
app.get('/find',async(req,res)=>{
    let userone=await usermodel.findOne({Age:20});

    res.send(userone);

})

//updating the existing record ;

app.get('/update',async(req,res)=>{
    let updateduser= await usermodel.updateOne({email:'@gmail.com'},{$set:{name:'Onkar Torane'}});

    res.send(updateduser);
   
})
app.listen(3000,function(){
    console.log('Server start');
})