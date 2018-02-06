const path = require('path')
const express = require("express");

var app = express();
// serving the public directory. app.use is a middleware 
app.use(express.static(path.join(__dirname, `../public`)));











app.listen (process.env.PORT, process.env.IP, function (){
    console.log("Server up @ https://socket-io-mjnelson.c9users.io");
})
