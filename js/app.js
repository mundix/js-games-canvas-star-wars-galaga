
$(function(){
    var mySound = new Audio('../media/bg/02-Underclocked.mp3');
    mySound.play();
    mySound.volume = 0.3;

    const alienBossGreenImage = document.getElementById("alien-boss-green-sprite");
    const shipImage = document.getElementById("ship");

    const ship = new Ship(shipImage,stageWidth/2,stageHeight/2,40,40);
    ship.y = stageHeight -  ship.height - 10; 

    
   
    // animated();

    // ctx.drawImage(shipImage,100,100,100,100);
    // ctx.save();
    // ctx.translate( 100, 100 );
    // ctx.rotate( 45*Math.PI/180 );
    // ctx.translate( 100, 100 );
    // ctx.drawImage(shipImage,-100,-100,100,100);
    // ctx.restore();
    
    // ctx.save();
    // ctx.translate( 100, 100 );
    // ctx.rotate( 30*Math.PI/180 );
    // ctx.translate( 100, 100 );
    // ctx.drawImage(shipImage,-100,-100,100,100);
    // ctx.restore();

    // ctx.save();
    // ctx.translate( 100, 100 );
    // ctx.rotate( 60*Math.PI/180 );
    // ctx.translate( 100, 100 );
    // ctx.drawImage(shipImage,-100,-100,100,100);
    // ctx.restore();

    // ctx.save();
    // ctx.translate( 100, 100 );
    // ctx.rotate( 90*Math.PI/180 );
    // ctx.translate( 100, 100 );
    // ctx.drawImage(shipImage,-100,-100,100,100);
    // ctx.restore();

    const alien = new Alien(alienBossGreenImage,
        stageWidth/2 ,
        stageHeight/3,
        alienBossGreenImage.width,
        alienBossGreenImage.height
        );

    collection.push(ship); 
    collection.push(alien);

    init();

    // let xs = 0,xe = 100; //xe=> end X position
    // let ys = 0,ye = 100; //ys=> end Y position 
    // let Dx = xe-xs;
    // let Dy = ye-ys;
    // let tan = Dx/Dy;
    // let atan = Math.atan(tan);
    // let angle = Math.atan((xe-xs)/(ye-ys)) * 180/Math.PI;
    // console.log(angle);
    document.addEventListener('keydown',event => {
        const offset = 3;
    
        if(event.keyCode === 32) //IF press "space key"
        {
            ship.shoot();
        }
        if(event.keyCode === 37){ //move to the right
            // ship.x-=speed*offset;
            ship.x-=speed*offset;
        }else if(event.keyCode === 39){ //move to the left
            // ship.x+=speed*offset;
            ship.x+=speed*offset;
        }
    
        // ship.ctx.rotate(0.17);
        
    });

});
var dx = 4;
let x = y =stageHeight;
// let x = 0;
let angle = 50;
angle = getAngle(10,20,x,y);
x = 50;
console.log(angle);
// const trayectory = {x:100,y:100};



function animated()
{
    ctx.clearRect(0, 0, stageWidth, stageHeight);
    y = trayectoryYbyX(x,angle);
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle='red';
    ctx.arc(x,y,30,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "right";
    ctx.fillText("x:"+x+" y:"+y, stageWidth, 50); 

    if( x > stageWidth || x < 0)
        dx = -dx;

    x += dx;

    requestAnimationFrame(animated);
}

