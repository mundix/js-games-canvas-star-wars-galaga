var canvas = document.getElementById("screen");
var context = canvas.getContext("2d");

canvas.width = 256*2;
canvas.height = 256*2;

context.beginPath(); 
context.lineWidth="5";
context.strokeStyle="green"; // Green path
context.moveTo(0,5);
context.lineTo(100,5);
context.stroke(); // Draw it

context.beginPath(); 
context.lineWidth="5";
context.strokeStyle="red"; // Green path
context.moveTo(0,10);
context.lineTo(50,10);
context.stroke(); // Draw it

var X = 200;
var Y = 200;
var W = 100;
var H = 100;

// context.fillStyle = 'red';
// context.fillRect(64, 64, 128, 128); //Middle square.
context.drawImage(document.getElementById("ship"), X, Y, W, H);

context.save(); //Save transformations.
//Translate, rotate.
var X = 200;
var Y = 200;
var W = 100;
var H = 100;
context.translate(X,Y);
context.rotate(45*Math.PI/180);
context.translate(-X,-Y);

context.drawImage(document.getElementById("ship"), X, Y, W, H);

// context.drawImage(document.getElementById("ship"), 50, 50, 100, 100);
context.restore(); //Restore default transformations.

// $(function(){
//     init();
// });

