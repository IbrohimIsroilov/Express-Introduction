const express=require('express');
const app=express();
console.dir(app);

app.post('/cats',(req,res)=>{
    res.send('this is a post request');
})
app.get('/',(req,res)=>{
    res.send('Homepage');
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params;
    res.send(`Browsing ${subreddit} subreddit`);
})

app.get('/cats',(req,res)=>{
    res.send('meow');
})

app.get('/dogs',(req,res)=>{
    res.send('woo');
})

app.get('*',(req,res)=>{
res.send('this is not related');
})

app.listen(3000, ()=>{
    console.log('LISTENING ON PORT 3000');
})