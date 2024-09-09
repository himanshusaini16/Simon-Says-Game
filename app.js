const express=require("express");
const ejs=require("ejs");
const path=require("path");
const ejsMate = require("ejs-mate");

const app=express();
const port=3000;

app.listen(port,()=>{
    console.log(`listen to port number ${port}`);
})

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})