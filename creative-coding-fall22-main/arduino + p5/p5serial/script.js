var angle = 0;
let fr = 24;
let SPEED = 10;
let ballStart = 50;

let serial;                             // variable to hold an instance of the serialport library
// let portName = '/dev/cu.usbmodem1412301';  // fill in your serial port name here
let inData;                             // for incoming serial data
let portSelector;

let dataMode;
let buttonData;
let potentiometerData;

function setup() {
  createCanvas(520,520)
  serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('list', printList);       // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing

  serial.list();                      // list the serial ports
  // serial.openPort(portName);              // open a serial port
  frameRate(fr);//framerate = 1 sec
  
  //sliders.position(200,100) //fail to move the sliders into canvas
}

function draw() {
  background(225,143,192)
  fill(255)
  stroke(random(255),random(0),random(0))
  strokeWeight(10)
  ellipse(260,260,519,519)// large circle background

  ballStart = ballStart + SPEED;
  if (ballStart > 300){
    SPEED = -SPEED;
  }
  if(ballStart < 0){
    SPEED = SPEED * -1
  }//check the balls dont go outside of the screen, link:
  //https://editor.p5js.org/cs4all/sketches/S16RZ0KaX
  
  if(buttonData == 0){
  stroke(25,26,225)
  fill(0)
  ellipse(ballStart,200,potentiometerData)
  ellipse(ballStart + 100,200,potentiometerData)
  ellipse(ballStart + 200,200,potentiometerData)//draw three balls
  }else if(buttonData == 1){
  stroke(23,255,78)
  strokeWeight(5)
  fill(0)
  ellipse(50,ballStart,inData+10)
  ellipse(50, ballStart + 100,inData+30)
  ellipse(50, ballStart + 200,inData+70)//draw three balls
  }

}
// make a serial port selector object:
function printList(portList) {
  // create a select object:
  portSelector = createSelect();
  portSelector.position(10, 10);
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // add this port name to the select object:
    portSelector.option(portList[i]);
  }
  // set an event listener for when the port is changed:
  portSelector.changed(mySelectEvent);
}

function mySelectEvent() {
  let item = portSelector.value();
  // if there's a port open, close it:
  if (serial.serialport != null) {
    serial.close();
  }
  // open the new port:
  serial.openPort(item);
}

function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.')
}

function serialEvent() {
  // read a byte from the serial port, convert it to a number:
  let inString = serial.readLine();

  if(inString.length <= 0) return;

  if (inString === "potentiometer") {
    dataMode = "potentiometer"
  } else if(inString === "button") {
    dataMode = "button"
  } else if(dataMode === "potentiometer") {
    potentiometerData = inString
  } else if (dataMode === "button") {
    buttonData = inString
  }

  inData = inString
}

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
  console.log('The serial port closed.');
}
