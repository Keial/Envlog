const SerialPort = require("serialport");
const Readline = require("@serialport/parser=readline");

const port = new SerialPort("COM3",{
    bauRate : 9600,
});

const parser = new Readline();
port.pipe(parser);

parser.on("date",(line) => console.log(line));

