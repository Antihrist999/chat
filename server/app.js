const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

users = [];
connections = [];

io.on('connection', function (socket) {
  console.log("Подключение к чату")
  connections.push(socket);

  socket.on('disconnect', function (data) {
      connections.splice(connections.indexOf(socket), 1)
      console.log(data)
      connections.splice(users.indexOf(data.name), 1)
      console.log("Отключение от чата")
  });
  console.log(users)
  socket.on('sendMess', function (data) {

  /*if (users.indexOf(data.name) == -1) {
        users.push(data.name);
        io.sockets.emit('add users', {
            user: data.name
        })
    }*/
    console.log(data)
    io.sockets.emit('add mess', {
        msg: data
    }); 
});
})



module.exports = {
  app,
  server
}
