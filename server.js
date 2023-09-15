const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(path.join(__dirname ,'public')));

io.on('connection',(socket)=>{
    console.log("A user is Connected");

    socket.on('chat message',(msg)=>{
        const timestamp = new Date().toLocaleTimeString();
        const message = {text : msg, timestamp : timestamp};
        io.emit('chat message',message);
    });

    socket.on('disconnect',()=>{
        console.log("A user is disconnected");
    });
});

server.listen(3000,()=>{
    console.log('server is live on port 3000');
})