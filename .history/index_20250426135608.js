const express = require('express')
const app=express()
var mongoose= require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/est",{use})