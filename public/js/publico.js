var socket = io();

socket.on('estadoActual', (resp) => {
    actualizaHTML(resp.ultimos4);
});

socket.on('ultimos4', (resp) => {

    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(resp.ultimos4);
});

function actualizaHTML(ultimos4) {
    ultimos4.forEach((element, index) => {
        $(`#lblTicket${index+1}`).text("Ticket " + element.numero);
        $(`#lblEscritorio${index+1}`).text("Escritorio " + element.escritorio);
    });
}