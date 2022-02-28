const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/demodata')

var db=mongoose.connection;

db.on('err',console.log.bind(console,"Connection error"));
db.once('open',function(callback){
    console.log("connection successfull");
})

module.exports=db;