var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    { Server } = require("socket.io"),
    io = new Server(server);

    


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/', function(req, res) {
    res.redirect('default.html');
})





var usernames = {};

io.sockets.on('connection', function(socket) {
    socket.on('sendchat', function(data) {
        io.sockets.emit('updatechat', socket.username, data)
    });

    socket.on('adduser', function(username) {
        socket.username = username;
        usernames[username] = username;
        socket.emit('updatechat', 'SERVER', 'You have connected');
        socket.broadcast.emit('updatechat', 'SERVER', username + ' has connected!');
        io.sockets.emit('updateusers', usernames)
    });

    socket.on('disconnect', function(){
        delete usernames[socket.username];
        io.sockets.emit('updateusers, usernames');
        socket.broadcast.emit('updatechat', 'SERVER', socket.username + 'has disconnected');
    });
});

server.listen(8080, () => {
    console.log('listening on *:8080');
  });
