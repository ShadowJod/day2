const express = require("express");

const app = express(); // server instance create krna

app.get('/',(req, res)=>{
    res.send("Hello World!")
})

app.get('/contact', (req, res)=>{
    res.send("This is Contact Form!");
})

app.get('/about', (req,res)=>{
    res.send("This is About Page!")
})

app.get('/OurPeople', (req, res)=>{
    res.send("This is Our People!")
})

app.get('/home', (req,res)=>{
    res.send("This is Home Page!")
})
app.listen(3000) // server start krna