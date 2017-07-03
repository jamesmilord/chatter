const express = require('express');
const path = require('path');
const app = express();
const socket= require('socket.io')

const port = process.env.PORT || 80;

const server = app.listen(port, () => {
  console.log("server listnning on port"+port);
});



app.use(express.static(path.join(__dirname, 'client')));

const io = socket(server);



io.on('connection',(socket) => {
      console.log('User '+socket.id+' Connected...');


      socket.on('disconnect', () => {
        console.log('User disconnected...');
      });

      socket.on('add-message', (message, username) => {
        io.emit('message', {type: 'new-message', text: message, username: username})
      });



      socket.on('typing', (data)=>{
      socket.broadcast.emit('typing', data);
      });



});
