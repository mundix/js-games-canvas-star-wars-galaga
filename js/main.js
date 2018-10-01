var canvas = document.getElementById("screen");
var context = canvas.getContext("2d");

canvas.width = 256;
canvas.height = 256;

context.save(); //Save transformations.

//Translate, rotate.
context.translate(128,128);
context.rotate(25*Math.PI/180);
context.translate(-128,-128);

context.fillRect(64, 64, 128, 128); //Middle square.

context.restore(); //Restore default transformations.

context.fillRect(2, 2, 16, 16); //Corner square.