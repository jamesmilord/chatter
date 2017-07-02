const express = require('express');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


const port = process.env.PORT|| 8080;



io.on('connection',(socket) => {
      console.log('User Connected...');


      socket.on('disconnect', () => {
        console.log('User disconnected...');
      });

      socket.on('add-message', (message, username) => {
        io.emit('message', {type: 'new-message', text: message, username: username})
      });


});






app.listen(port, () => {
  console.log("server on port "+port);
});
