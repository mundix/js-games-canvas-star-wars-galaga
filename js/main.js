// //Speed
// var dx = 10;
// //Start points
// let xs =  100;
// let ys = 100;
// //end points
// let xe = stageHeight;
// let ye = stageHeight/2;

// let angle = 50;

// let x = xs;
// let y = ys;
// let yValue = trayectoryYbyX(x,angle);


// // angle = 20;

// let alien = new Alien(document.getElementById("alien-boss-green-sprite"),stageWidth/2,stageHeight/2,document.getElementById("alien-boss-green-sprite").width,document.getElementById("alien-boss-green-sprite").height);



// function animated()
// {
//     ctx.clearRect(0, 0, stageWidth, stageHeight);
//     y = trayectoryYbyX(x,angle);

//     alien.draw();

//     angle = getAngle(x,y,alien.x,alien.y);
//     alien.move();

//     ctx.save();
//     ctx.beginPath();
//     ctx.fillStyle='red';
//     ctx.arc(x,y,30,0,2*Math.PI);
//     ctx.fill();
//     ctx.stroke();
//     ctx.restore();

//     ctx.font = "30px Comic Sans MS";
//     ctx.fillStyle = "white";
//     ctx.textAlign = "right";

//     ctx.fillText(`Angle ${angle.toFixed(2)}  x:${x.toFixed(1)} y:${y.toFixed(1)} `, stageWidth-100, 50); 

//     if( x > stageWidth-30*2|| x < 0)
//         dx = -dx;
//     x += dx;
//     // console.log(x,',',y);
//     // if(y < stageHeight)
//     requestAnimationFrame(animated);
// }


// animated();

