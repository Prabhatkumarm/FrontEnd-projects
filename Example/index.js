const express = require('express');
const app=express();
const path= require('path');
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
const comments=[{
    id: 0,
    name: 'cat',
    text: 'I love cat nips'
},
{
    id:1,
    name: 'dog',
    text: 'I love running around'  
},{
    id: 2,
    name: 'monkey',
    text: 'I love bananana'
}];
app.get('/test',(req,res)=>{
    res.send('Connected successfully');
})
 
app.get('/comments',(req,res)=>{
    res.render('index',{comments});
})

app.listen(5000, ()=>{
    console.log("server running at 5000......");
})