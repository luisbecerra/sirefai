/**
 * Envia una imagen guardada en el disco (out.png) al servidor
 * Ejecuta la funcion callbackOk si la imagen fue recibida correctamente
 * Ejecuta la funcion callbackFail si la imagen no pudo ser enviada
 *
 * @param {function} callbackOk
 * @param {function} callbackFail
 */
function enviarImagen(callbackOk,callbackFail){
    var fs = require('fs');
    var request = require('request');

    var req = request.post("http://52.25.109.66:9000/recognize/", function (err, resp, body) {
        if(err)
            callbackFail(err);
        else
            callbackOk(resp,body);
    });

    var form = req.form();
    form.append('image', fs.createReadStream('out.png'));   
}

/**
 * Pregunta al servidor si la persona fue aceptada o no y ejecuta un callback
 *
 * @param {function} callbackOk
 */
function recibirRespuesta(callbackOk){
    $.get("http://52.25.109.66:9000/recognize/", function(respuestaSolicitud){
        callbackOk(respuestaSolicitud);
    })
}

/**
 * Convierte una foto codificada en base64 a un archivo png
 *
 * @param {String} fotoBase64
 * @param {function} callbackOk
 */

function guardarImagen(fotoBase64,callbackOk){
    var base64Data = fotoBase64.replace(/^data:image\/png;base64,/, "");
    var fs = require('fs');
    var path = require('path');

    fs.writeFile("out.png", base64Data, 'base64', function(err,data) {
        if(err)
            console.log("error al guardar imagen");

        callbackOk();
    });
}