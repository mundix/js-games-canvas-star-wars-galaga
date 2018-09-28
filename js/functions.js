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
    requestAnimationFrame(frame);

    ctx.clearRect(0, 0, innerWidth, innerHeight);
    draw();
    collision();
    
}
/**
 * @todo Retrieve Y position by pos X and Angle
 * 
 * @param Float x
 * @param Float angle (Rad)
 * 
 * @return Float
 * */ 
function trayectoryYbyX(x,angle)
{
    const AngleRads  = (angle * Math.PI/180);
    return  x/(Math.tan(AngleRads));
}
/** 
 * @todo Return Angle by coordinates
 * 
 * @param Float xs (Pos X Start)
 * @param Float ys (Pos Y Start)
 * @param Float xe (Pos X End)
 * @param Float ye (Pos Y End)
 * 
 * @return Float (Deg)
*/
function getAngle(xs,ys,xe,ye)
{
    return Math.atan(((xe-xs)/(ye-ys))) * 180/Math.PI;
}

function init(){
    frame();
};


