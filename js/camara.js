var camara;
var foto;
var ctx;
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
