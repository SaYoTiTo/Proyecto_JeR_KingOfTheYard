var serverId;
var playerId;
var timer;
var conexion = false;
//Url de la pagina
var linkS =  window.location + "get/";	//"http://localhost:8080/get/"

//
$(document).ready(function () {
    console.log("Sand - " + linkS);

    $("#conectarse").click(function () {
        startConexion();
    })
    $("#desconectarse").click(function () {
        endConexion();
    })

    $("#sendButton").click(function () {
        postMessage(); 
    })
})


function startConexion() {
    if (!conexion) {
        var message = $("#nick").val();
        $("#nick").val("");
        console.log(message);
        if (message == "") {
            $('#info').empty();
            $("#info").append("<p> Nombre invalido </p>");
        } else {
            $.ajax({
                method: "POST",
                url: linkS,
                data: message,
                processData: false,
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(function (data) {
                if (data.salaId == null || data.salaId == undefined) {
                    $('#info').empty();
                    $("#info").append("<p> Jugador ya conectado </p>");
                    conexion = false;
                } else {
                    serverId = data.salaId;
                    playerId = data.id;
                    console.log("Server id" + serverId + " Player id:" + playerId);
                    timer = setInterval(function () {
                        ping();
                    }, 1000);
                    conexion = true;
                }
            }).fail(function (jqXHR, textStatus, errorThrown) {
                endConexion();
                $('#info').empty();
                $("#info").append("<p>Servidor desconectado</p>");
            });

        }
    }
}

function endConexion() {
    if (conexion) {
        clearInterval(timer);
        conexion = false;
        $('#jugadores').empty();
        $('#jugadores').append("<p>Desconectado<p>");
        $('#info').empty();
    }
}
function postMessage() {
    var d = new Date();
    var n = d.toLocaleTimeString();
    if (conexion) {
        var message = $("#msg__input").val();
        $("#msg__input").val("");
        $("#messageInput").val("");
        var mensaje = {
            autor: "" + playerId + "",
            fecha: n,
            texto: message
        }
        $.ajax({
            method: "POST",
            url: linkS + serverId,
            data: JSON.stringify(mensaje),
            processData: false,
            headers: {
                "Content-Type": "application/json"
            }
        })
        // $('#info').append("<div>" + message + "</div>");
        console.log("Item created: " + JSON.stringify(mensaje));
    }
}

function ping() {
    //console.log("ping");
    $.ajax({
        url: linkS + serverId + "/" + playerId,
    }).done(function (data) {

        $('#jugadores').empty();
        $('#jugadores').append("<p>Server ID: " + serverId + "</p>");
        $('#jugadores').append("<p>Jugador ID: " + playerId + "</p>");
        $('#jugadores').append("<p>Jugadores conectados: " + data.jugadores.length + ":</p>");
        for (var i = 0; i < data.jugadores.length; i++) {
            $("#jugadores").append("<p>-" + data.jugadores[i] + "</p>");
        }
        $('#info').empty();
        for (var i = 0; i < data.mensajes.length; i++) {
            var dato = data.mensajes[i];
            $("#info").append("<p>" + dato.autor + "[" + dato.fecha + "]: " + dato.texto + "</p>")
        }

    }).fail(function (jqXHR, textStatus, errorThrown) {
        endConexion();
        $('#info').empty();
        $("#info").append("<p>Servidor desconectado</p>");
    });

}
