/**
 * 
 */
function invocarServicioSOAP(webServiceURL, soapMessage) {
	
    $.ajax({
        url: webServiceURL,      
        type: "GET",
        cache: false,
        data: soapMessage,
        contentType: "text/xml",
        success: onSuccess,
        error: onError
    });
    return false;		
}

function onSuccess(data, status)
{
	alert("exito"+" "+data+" "+status);
}

function onError(request, status, error)  //Funcion que se ejecuta si ocurre algun error
{
	alert("fallo "+error+" "+status);
}

function invocarServicioREST(webServiceURL, message) {
	
    $.ajax({
        url: webServiceURL,      
        type: "POST",
        cache: false,
		data: message,
		dataType: "json",
        success: onSuccessRest,
        error: onErrorRest
    });
    return false;		
}

function onSuccessRest(data, status)
{
	alert("exito"+" "+JSON.stringify(data)+" "+status);
}

function onErrorRest(request, status, error)  //Funcion que se ejecuta si ocurre algun error
{
	alert("fallo "+error+" "+status);
}
/*
function pruebaServer(){
   
    var data = { "image": tomarFoto() };
    
    $.ajax({
        type: "POST",
        url: "http://52.10.240.204:9000/recognize/",
        dataType: 'json',
        data: data
    })
    .done(function (response) {
        console.log(response);
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
    });
}
*/

function pruebaServer(){

    var base64Data = tomarFoto().replace(/^data:image\/png;base64,/, "");
    var fs = require('fs');
    var path = require('path');
    var request = require('request');

    var req = request.post("http://52.10.240.204:9000/recognize/", function (err, resp, body) {
        if (err) {
            console.log('Error!');
        } else {
            console.log('URL: ' + body);
        }
    });

    var form = req.form();
    form.append('image', fs.createReadStream('out.png'));
    
}

function saveImg(){
    var base64Data = tomarFoto().replace(/^data:image\/png;base64,/, "");
    var fs = require('fs');
    var path = require('path');

    fs.writeFile("out.png", base64Data, 'base64', function(err,data) {
        if(err)
            console.log("error al guardar imagen");

        $('#inputFoto').val(path.resolve('out.png'));
    });

}