

$(function(){
    const alienBossGreenImage = document.getElementById("alien-boss-green-sprite");
    const shipImage = document.getElementById("ship");
    const ship = new Ship(shipImage,stageWidth/2,stageHeight,40,40);

    ship.x = stageWidth/2 - ship.width;
    ship.y = stageHeight - ship.height - 10;

    const alien = new Alien(alienBossGreenImage,
        stageWidth/2 ,
        stageHeight/3,
        alienBossGreenImage.width,
        alienBossGreenImage.height
        );

    collection.push(ship);
    collection.push(alien);
    init();

    document.addEventListener('keydown',event => {
        const offset = 3;
    
        if(event.keyCode === 32) //IF press "space key"
        {
            // shoot();
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



