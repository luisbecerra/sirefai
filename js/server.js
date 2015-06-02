/*
var fs = require('fs');
var http = require('http');
var ip = '192.168.1.2';

var server1 = http.createServer(function(request, response) {
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.end('<a href="http://'+ ip +':5000/" style="font-size:2em">Identificar visitante</a>');
    puerto.send("0");
}).listen(4000, ip);

var server2 = http.createServer(function(request, response) {
	response.writeHead(200,{'Content-Type': 'text/html'});
	response.end('<img src="'+ fotoTomada +'" /><br><br><a href="http://'+ ip +':6060/" style="font-size:2em">Aceptar visitante</a><br><br><a href="http://'+ ip +':7000/" style="font-size:2em">Rechazar visitante</a></body>');
}).listen(5000, ip);

var server3 = http.createServer(function(request, response) {
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.end('<b style="font-size:2em">Visitante aceptado</b><br><a href="http://'+ ip +':4000/" style="font-size:2em">Inicio</a>');
    puerto.send("A");
}).listen(6060, ip);

var server4 = http.createServer(function(request, response) {
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.end('<b style="font-size:2em">Visitante rechazado</b><br><a href="http://'+ ip +':4000/" style="font-size:2em">Inicio</a>');
	puerto.send("B");
}).listen(7000, ip);
*/
