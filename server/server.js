const path = require('path')
const express = require("express");
const http= require("http");
const socketIO = require("socket.io")
const {generateMessage, generateLocationMessage} = require ("./utils/message.js")
const {Users} = require("./utils/users.js")
const {isRealString} = require("./utils/validation.js")
const port = process.env.PORT || 3000;


var app = express();
// setting the http create server method to use the express library
var server = http.createServer(app)

var io = socketIO(server)
// serving the public directory. app.use is a middleware
app.use(express.static(path.join(__dirname, `../public`)));
var users = new Users ();


//io.emit - emits to every connected user
//socket.broadcast.emit - sends to every user expect the connected user
//socket.emit - event to one user



//io.emit - emits to every connected user
  // io.to.('room name').emit

//socket.broadcast.emit - sends to every user expect the connected user
  //socket.broadcast.to('room name').emit


io.on('connection', (socket)=>{
console.log("Connected to client")




socket.on('join',(params, callback)=>{
// if name OR if room returns false then throw the callback
if(!isRealString(params.name) || !isRealString(params.room)){
  return callback('name and room name are required')
  }

// removing a user if they already exisit in the room + adding a user
  users.removeUser(socket.id)
  users.addUser(socket.id, params.name, params.room)


  socket.join(params.room);
  io.to(params.room).emit('updateUserList', users.getUserList(params.room))

  socket.emit('newMessage',generateMessage('Admin','Welcome to the chat app!'))
  socket.broadcast.to(params.room).emit('newMessage',generateMessage('Admin',`${params.name} has joined`))

  callback();
})


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
        var user = users.removeUser(socket.id)

        if(user){
          io.to(user.room).emit('updateUserList', users.getUserList(user.room))
          io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left`))

        }


        })
})










// this uses httpListen, it passes in the app as the arguement for createServer
// http library very muich the same as the exp[ress library
server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
