var audio = new Audio('../media/bg/02-Underclocked.mp3');
const shipImage = document.getElementById("ship");
const ship = new Ship(shipImage,stageWidth/2,stageHeight/2,40,40);

$(function(){
    audio.volume = 0.1;
    audio.oncanplaythrough = function(){
        // audio.play();
    }
    audio.onended = function(){
        console.log('ended');
    }
    
    

    const alienBossGreenImage = document.getElementById("alien-boss-green-sprite");
    ship.y = stageHeight -  ship.height - 10; 
    console.log(ship.constructor.name);

    const alien = new Alien(alienBossGreenImage,
        stageWidth/2 ,
        stageHeight/3,
        alienBossGreenImage.width,
        alienBossGreenImage.height
        );
        
        console.log(alienBossGreenImage.width);

    collection.push(ship);
    collection.push(new Rectangle(alien.x,alien.y,alien.width,alien.height)); 
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


