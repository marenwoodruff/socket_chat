/*
* main.js
*/

// wait for DOM to load before running JS
$(function() {

  // connect to socket
  var socket = io();

  // submit form to send a message
  $('#send-msg').on('submit', function (event) {
    event.preventDefault();

    // get new message from form input
    var newMsg = $('#new-msg').val();

    // send new message to socket (server)
    socket.emit('chat message', newMsg);
  });

  // receive message from socket (server)
  socket.on('chat message', function (msg) {
    $('#messages').append($('<li>' + msg + '</li>'));
  });

});