var intervaloPeticion = 0;
var tiempoRespuestaServer = 0;

/**
 * Identifica al usuario, se ejecuta despues de oprimir el boton identificarme
 *
 */
function identificar(){
	mostrarConteo();

	setTimeout(function(){
		deshabilitarBoton();
		var fotoBase64 = tomarFoto();
		guardarImagen(fotoBase64,function(){
			enviarImagen(imagenEnviada,excepcionImagen);
		});
	},5000);
}

/**
 * Se ejecuta despues de que el servidor confirmo que la recepcion de la imagen
 * A su vez queda en espera del mensaje de ingreso o rechazo de la imagen
 * @param {Object} respuesta
 * @param {Object} cuerpoRespuesta
 */
function imagenEnviada(respuesta,cuerpoRespuesta){
	console.log(respuesta);
	console.log(cuerpoRespuesta);
	deshabilitarBoton();

	tiempoRespuestaServer = 0;
	intervaloPeticion = setInterval(function(){
		if(tiempoRespuestaServer < 120000){
			recibirRespuesta(respuestaRecibida);
			tiempoRespuestaServer+=1000;
		}
	},1000);
}

/**
 * Se ejecuta si la imagen no pudo ser enviada
 *
 * @param {Object} error
 */
function excepcionImagen(error){
	console.log(error);
	alert('Error al enviar la imagen, compruebe su conexion a internet.');
}

/**
 * Procesa la respuesta recibida y envia mensajes
 * al arduino para encender los leds de aceptacion o rechazo
 *
 * @param {Object} respuesta
 */
function respuestaRecibida(respuesta){
	if(respuesta.response == true){
		puertoSerial.send("A");
	}else if(respuesta.response == false){
		puertoSerial.send("B");
	}

	clearInterval(intervaloPeticion);
	habilitarBoton();
}