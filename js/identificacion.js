var fotoTomada="";
function identificar(){
	var fotoURL = tomarFoto();

	parametros='foto='+fotoURL+'';
	
	//invocarServicioREST('https://opsud-developer-edition.na24.force.com/ops/services/apexrest/PruebasImagen', parametros);
}

function identificar2(){
	fotoTomada = tomarFoto();
}

function tomarFoto(){
	var $camara = $("#camara");
	cxt.drawImage(camara, 0, 0, $camara.width(), $camara.height());
			
	var img = new Image();
	img.src = foto.toDataURL();
	
	return img.src;
}


