function collision() {

}
function draw(){
    collection.forEach((obj,key) => {
        obj.draw();
        obj.move();
    });
    collectionShoots.forEach((obj,key) => {
        // obj.shoot();
        obj.draw(); 
        obj.move();
        if(obj.collision()){
            collectionShoots[key] = null;
            delete collectionShoots[key];
        }

    });
    // ship.draw();
    // ship.move();
}



function frame(time = 0){
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    draw();
    // collision();
    
    requestAnimationFrame(frame);
}
function init(){
    frame();
};


