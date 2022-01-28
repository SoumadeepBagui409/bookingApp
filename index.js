const express =require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const User = require('./model/user');
const List = require('./model/list');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/BookingApp');

app.get('/',(req,res)=>{
    res.render('user');
})

app.get('/items',(req,res)=>{
    res.render('item');
})

app.get('/booking',(req,res)=>{
    res.render('booking');
})
app.get('/getUser',async(req,res)=>{
    res.send(await User.find({}))
})
app.get('/getList',async(req,res)=>{
    res.send(await List.find({}))
})
app.post('/user',async(req,res)=>{
    const {username, email} = req.body;
    try{
        await User.create({
            username:username,
            email:email
        });
        res.redirect('/list');
    }
    catch(err){
      res.send('showError',{error:err.message,back:'/user'});
    }

})

app.post('/item',async(req,res)=>{
    const {itemname,userid} = req.body;
    try{
        const user = await User.findById(userid);
        if(user){
            await List.create({
                name:itemname,
                userId:userid
            })
        }else{
            res.render('showError',{error:'No user Found',back:'/item'});
        }
    }catch(err){
        res.render('showError',{error:err.message,back:'/item'});
    }

})

// app.post('/booking',async(req,res)=>{
//     const {userid,itemid,StartDate,endDate} = req.body;
//     try{    
           
//     }catch(err){
//      
//   res.render('showError',{error:err.message,back:'/booking'});
//     }
// })

app.listen(3000);