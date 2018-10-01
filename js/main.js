// $(function(){
    // init();
    // var Crafty = require('craftyjs');
// Crafty("screen");
Crafty.init(900,900,"screen");

Crafty.background('black');

// Crafty.e('2D, Canvas, Color, Fourway')
//   .attr({x: 10, y: 10, w: 30, h: 30})
//   .color('red')
//   .fourway(3);
// });
var square = Crafty.e('2D, Canvas, Color');
square.attr({
  x: 10,
  y: 10,
  w: 100,
  h: 100
}).color('red');

square.origin("center");

square.bind('UpdateFrame', function(){
  this.rotation = this.rotation + 1;
});






