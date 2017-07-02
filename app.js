const express = require('express');

const app = express();
const socket= require('socket.io')

const server = app.listen(4200, () => {
  console.log("server listnning");
});



app.use(express.static('client'));

const io = socket(server);



io.on('connection',(socket) => {
      console.log('User '+socket.id+' Connected...');


      socket.on('disconnect', () => {
        console.log('User disconnected...');
      });

      socket.on('add-message', (message, username) => {
        io.emit('message', {type: 'new-message', text: message, username: username})
      });


});
