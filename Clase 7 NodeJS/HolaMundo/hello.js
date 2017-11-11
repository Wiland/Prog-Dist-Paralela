var http = require("http");

var manejador = function(solicitud, respuesta){
		console.log("Hola Mundo");
		respuesta.end("Hola mundo, respuesta del servidor");
}

var servidor = http.createServer(manejador);

servidor.listen(8000);
console.log("running server: port 8000");
