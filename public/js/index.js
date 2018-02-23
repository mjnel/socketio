    var socket = io();


            socket.on(`connect`, function(){
                console.log("connected to server")
            })





            socket.on(`disconnect`, function(){
                console.log("disconnected from server")
            })

            socket.on('newMessage', function (message) {
              console.log('newMessage', message);
              var li  = jQuery('<li></li>')
              li.text(`${message.from}: ${message.text}`)
              jQuery('#messages').append(li)
              ;
            });




            jQuery('#message-form').on('submit', function(e){
                e.preventDefault();

            socket.emit(`createMessage`,{
                from: jQuery('[name=user]').val(),
                text: jQuery('[name=message]').val()
            }, function(){
                jQuery('[name=message]').val('')

                })
            })



            var locationButton = jQuery('#send-location')
            locationButton.on('click', function(){

            if(!navigator.geolocation){
                return (alert('Geolocation not supported by your browser'))
            }

                navigator.geolocation.getCurrentPosition(function(position){
                    socket.emit(`createLocationMessage`, {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        user: jQuery('[name=user]').val()

                    })
                }, function(){
                  alert("unable to fetch location!")
                })
            })



        socket.on('newLocationMessage', function(message){
            var li = jQuery('<li></li>');
            var a = jQuery('<a target = "_blank">Current location</a>')
            li.text(`${message.from}: `)
            a.attr('href', message.url)
            li.append(a);
            jQuery('#messages').append(li)



        })
