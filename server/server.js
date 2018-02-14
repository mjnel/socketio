const path = require('path')
const express = require("express");
const http= require("http"); 
const socketIO = require("socket.io")

var app = express();
// setting the http create server method to use the express library
var server = http.createServer(app)

var io = socketIO(server)
// serving the public directory. app.use is a middleware 
app.use(express.static(path.join(__dirname, `../public`)));

io.on('connection', (socket)=>{
    console.log("Connected to client")
    
    socket.emit('test',{
        test: "emit test event working"
    })    

  socket.on('createMessage', (message) => {
    // console.log('createMessage', message);
    io.emit('newMessage1', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });

})


    socket.on(`disconnect`, ()=>{
        console.log("Disconnected from client")
        })
})










// this uses httpListen, it passes in the app as the arguement for createServer
// http library very muich the same as the exp[ress library
server.listen (process.env.PORT, process.env.IP, function (){
    console.log("Server up @ https://socket-io-mjnelson.c9users.io");
})
