function collision() {

}
function draw(){
    collection.forEach((obj,key) => {
        obj.draw();
        obj.move();
    });
    // ship.draw();
    // ship.move();
}
function frame(time = 0){

    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;
    // console.log(dropCounter);
    if(dropCounter > dropInterval) {
        draw();
        collision();
    }

    requestAnimationFrame(frame);
}

function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    });
}


function init() {
    frame();
}

