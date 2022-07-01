const express = require('express');
const app = express();
const PORT = 5777;
const path = require('path');
const hbs = require('hbs');

app.set('view engine' ,'hbs');
app.set('views', './templets/views' );
app.use(express.static('./public'));

hbs.registerPartials(path.join(__dirname,'../templets/partials'))

     // Routings //
app.get('/',(req,res)=>{
    res.render('index')
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/weather',(req,res)=>{
    res.render('weather')
});

app.get('*',(req,res)=>{
   res.render('404Error',{
    Errormessage:'Oopss!!! page not found'
   })
});

app.listen(PORT,()=>console.log(`server is running on Port ${PORT}`))
