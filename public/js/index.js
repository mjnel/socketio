    var socket = io();
            
            
            socket.on(`connect`, function(){
                console.log("connected to server")
            })
            
            
            socket.on(`disconnect`, function(){
                console.log("disconnected from server")
            })
         
            socket.on('newMessage1', function (message) {
              console.log('newMessage', message);
            });
            
            socket.on('test',function(message){
        console.log('test', message)
    }) 