var socket = io();
var label = $('#lblNuevoTicket');


socket.on('connect', function() {

    console.log('Conectado al servidor');
});

//escuchar
socket.on('disconnect', function() {

    console.log('Se perdio conexion con el servidor');
});


$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });

});

socket.on('estadoActual', function(resp) {
    label.text(resp.estadoActual);
});