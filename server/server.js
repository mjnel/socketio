const path = require('path')
const express = require("express");
const http= require("http"); 
const socketIO = require("socket.io")
const {generateMessage, generateLocationMessage} = require ("./utils/message.js")

var app = express();
// setting the http create server method to use the express library
var server = http.createServer(app)

var io = socketIO(server)
// serving the public directory. app.use is a middleware 
app.use(express.static(path.join(__dirname, `../public`)));





io.on('connection', (socket)=>{
    console.log("Connected to client")

socket.emit('newMessage',generateMessage('Admin','Welcome to the chat app!'))
socket.broadcast.emit('newMessage',generateMessage('Admin','New User Joined!'))


    

 socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from,message.text));
    callback(`this is from the server`);
        
 })
 
socket.on('createLocationMessage', (coords)=>{
    io.emit(`newLocationMessage`,generateLocationMessage(coords.user, coords.latitude, coords.longitude));
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
