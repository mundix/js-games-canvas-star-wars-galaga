class Base {
    collission(){

    }
}

class Ship extends Base {
    constructor(imageElemId = null, x = 0,y = 0,width = 50,height = 50,speed = 5) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = document.getElementById(imageElemId);
        this.ydir = speed;
        this.xdir = speed;
    }
    draw(){
        if(this.image !== null)
            ctx.drawImage(this.image,this.x,this.y,this.width,this.height) ;
    }

    move() {
        this.y -= this.ydix;
    }
}


class Alien extends Base {
    constructor(imageElemId = null, sX = 0,sY = 0,sW = 50,sH = 50,dX=0,dY=0,dW = 100, dH = 100 , speed = 6) {
        super();
        this.sX = sX;
        this.sY = sY;
        this.sW = sW;
        this.sH = sH;
        this.dX = dX;
        this.dY = dY;
        this.dW = dW;
        this.dH = dH;
        this.image = document.getElementById(imageElemId);
        this.ydir = speed;
        this.xdir = speed;
        this.sprites = [184-40,184-16];
    }
    draw(){
        if(this.image !== null)
            ctx.drawImage(this.image,this.sprites[0],this.sY,this.sW,this.sH,this.dX,this.dY,this.dW,this.dH) ;
    }

    move() {
        this.y -= this.ydix;
    }
}