var serialjs=require('serialport-js').node(); //thats the only difference
//the rest of the implementation is exactly the same.

serialjs.find(serialDevicesPopulated);

puerto=null;

function serialDevicesPopulated(ports){
    //ports arg is a refrence to serialjs.ports
    console.log(
        ports
    );

    if(!ports[0])
        return;

    serialjs.open(ports[0].port,start,'\n');
}

function start(port){

    puerto=port;
    port.on(
        'data',
        gotData
    );
    
    //if this doesn't show up the port may need a few milliseconds to open
    port.send('L');
}

function gotData(data){
    console.log(data);
}
