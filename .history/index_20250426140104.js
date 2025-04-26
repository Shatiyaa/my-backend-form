const express = require('express')
const app=express()
var mongoose= require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/est",{UseNewUrlParser:true,UseUnifiedTopology:true},
function checkDB(error)
{
    if(error)
    {
        console.log(error) 
    }
    else{
        console.log("Db connectedd!")
    }
});
