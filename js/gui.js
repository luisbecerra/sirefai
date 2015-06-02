var gui = require('nw.gui'); 

// Get the current window
var win = gui.Window.get();


/* eventos para los botones que controlan la ventana de la app */
$("#win-close").click(function(event) {
	win.close(true);
});

$("#win-minimize").click(function(event) {
	win.minimize();
});

$('#win-maximize').click(function(event) {
	win.maximize();
});


/**
 * Deshabilita el boton "Identificarme" para evitar que sature al programa de peticiones
 */
function deshabilitarBoton(){
	$("#identificar").addClass('disabled').text('Esperando respuesta');
}

/**
 * Habilita el boton "Identificarme" despues de recibir respuesta
 */
function habilitarBoton(){
	$("#identificar").removeClass('disabled').text('Identificarme');	
}


/**
 * Muestra un conteo regresivo para que el usuario en que momento la app toma la foto
 */
function mostrarConteo(){
	window.numero = 6;
	for (var i = 4; i >= 0; i--) {
		setTimeout(function(){
			window.numero--;
			$("#identificar").text(window.numero);
		},i * 1000);
	}

	setTimeout(function(){
		$("#flash").removeClass('oculto');
	},4400);

	setTimeout(function(){
		$("#flash").addClass('oculto');
	},4900);
}

