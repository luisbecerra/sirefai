var camara;
var foto;
var ctx;

/**
 * Enciende la camara del pc y muestra su imagen en un canvas
 */
function activarCamara(){
	window.URL = window.URL || window.webkitURL;
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia ||
	function() {
	    alert('Su navegador no soporta navigator.getUserMedia().');
	};

	foto= document.getElementById('foto');
	cxt = foto.getContext('2d');
	camara= document.getElementById('camara');
	
	navigator.getUserMedia({
        'audio': false,
        'video': true
    }, function(streamVideo) {
        
        camara.src = window.URL.createObjectURL(streamVideo);
        camara.play();

    }, function() {
        alert('No fue posible obtener acceso a la cámara.');
    });
}

/**
 * Toma una foto y la codifica en base64
 * Returns string, imagen codificada en base64
 */
function tomarFoto(){
	var $camara = $("#camara");
	cxt.drawImage(camara, 0, 0, $camara.width(), $camara.height());
			
	var img = new Image();
	img.src = foto.toDataURL();
	
	return img.src;
}