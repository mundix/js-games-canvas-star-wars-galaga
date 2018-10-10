class Base {
    collission(obj = null){
        
        if( (this.y <= (0 + this.height) || (this.y >= innerHeight-this.height)) ) 
            return true;
            
        if(obj !== null)
        {

            /**     this.x > obj.x && this.x < obj.x + obj.width
             * 0,0  areaX Between Obj.x and Obj.x + Obj.width
             * + ----------->
             * |           | 
             * |           |  areaY Between Obj.y and Obj.y + Obj.height 
             * |           |
             * V           |
             *  -----------
             *              x,y
             *  this.y > obj.y && this.y < obj.y + obj.height
             */
            if(
                
                ( 
                    (this.y >= obj.y && this.y <= (obj.y + obj.height))  //Vertical Collision
                    && 
                    (this.x >= obj.x && this.x <= (obj.x + obj.width)) )
                )
                return true;
        }

        return false;
        // if(this.x > obj.x && this.y < this.x + obj.width )
    }
}

class Ship extends Base {
    constructor(image = null, x = 0,y = 0,width,height) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
        this.dy = this.dx = speed * 0.5;
        this.powerUp = 1 ;
        // this.shootImage = document.getElementById("shoot-laser");
         
    }
    draw(){
        if(this.image !== null) 
            ctx.drawImage(this.image,this.x,this.y,this.width,this.height);

            ctx.font = "19px Comic Sans MS";
            ctx.fillStyle = "white";
            ctx.textAlign = "left";
            var x = Math.floor(this.x);
            var y = Math.floor(this.y);
            ctx.fillText("x:"+x+",y:"+y+", w:"+this.width+"h:"+this.height, 10 , stageHeight -15);  
        
    }

    score(){
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.textAlign = "right";
        ctx.fillText("Score: 000000000", stageWidth -10 , this.height); 
    }

    isVerticalcollision()
    {
        if( (this.y <= (0 + this.height) || (this.y >= innerHeight-this.height)) ) 
            return true;
        return false;
    }
    isHorizontalCollision()
    {
        if(  (this.x <= 0 +this.width || this.x >= (innerWidth-this.width)) ) 
            return true;
        return false;
    }

    move() {
        this.score();
        // this.y -= this.dy;
        // this.x += this.dx;

        // if(this.isVerticalcollision())
        //     this.dy = -this.dy;
        // if(this.isHorizontalCollision())
        //     this.dx = -this.dx;
            
    }
    shoot() {

        var mySound = new Audio('../media/fx/shoot-3.wav');
        mySound.play();
        mySound.volume = 0.1;

        const shootImage = document.getElementById("shoot-laser");
        // const shoot = new Shoot(shootImage,this.x+(this.width/2)-4,this.y,10,29);
        const shoot = new Shoot(shootImage,this.x+(this.width/2)-4,this.y,10,29);
        collectionShoots.push(shoot);
        if(this.powerUp == 2){
            collectionShoots.push(new Shoot(shootImage,this.x,this.y+10,10,29));
            collectionShoots.push(new Shoot(shootImage,this.x+this.width-9,this.y+5,10,29));
        }

    }
}

class Alien extends Base {
    constructor(image = null, x = 0,y = 0,width,height,percent,sprites = [0,127]) {
        super();
        const  randomNumber = Math.random();
        this.transition = (randomNumber>=5)?5:randomNumber; //transition speed
        this.x = x;
        this.y = y;
        this.width = width/2-10;
        this.height = height;
        this.image = image;
        this.dy = this.dx = speed * this.transition;
        this.sprites = sprites;
        this.percent = 0.5;
        this.sprite = 1;
        
        this.counter = 0;
        this.transitionTime = 0;
        this.growUpTime = 0;
        this.j = 0;
    }
    draw(){
        
        // console.log(this.sprites.length);
        if(this.image !== null) 
            ctx.drawImage(this.image,
                this.sprites[this.sprite],0,
                this.sprites[this.sprites.length-1],this.height,
                this.x,this.y,
                // this.height,this.height);
                this.height*this.percent,this.height*this.percent);

                ctx.font = "18px Comic Sans MS";
                ctx.fillStyle = "white";
                ctx.textAlign = "left";
                var x = Math.floor(this.x);
                var y = Math.floor(this.y);
                // ctx.fillText("x:"+x+",y:"+y, 10, 20);  
                ctx.fillText(`x: ${this.x} w: ${this.width} y: ${this.h} h: ${this.height}`, 10, 20);        
    }

    isVerticalcollision()
    {
        if( (this.y <= 0 || this.y < 0|| this.y >= stageHeight-this.height*this.percent) ) 
            return true;

        if(this.y < 0)
            this.y = 10;
        if(this.x > stageWidth)
            this.x = stageWidth - this.height*this.percent;
        return false;
    }
    isHorizontalCollision()
    {
        if(  this.x <= 0  || this.x >= stageWidth - this.height*this.percent ) 
            return true;
        return false;
    }

    move(time = 0) {
        // return;
        if(this.counter < 30)
        {
            this.counter ++;
        }else{
            this.counter = 0;
            if(this.sprite == 0)
                this.sprite = 1;
            else
                this.sprite = 0;
            this.shoot();
        }
        // return;


        if(this.transitionTime < 300){
            this.transitionTime ++;
        }else{
            //Controlling aceleration casualities not more than 5.5 
            this.transition = Math.random() * 10;
            this.dy = this.dx =  (this.transition - 3)>5?5.5:(this.transition - 3) ;
            
            // console.log(this.dy);
            this.transitionTime = 0;
            if(this.j < 8)
            {

                if(this.growUpTime < 3) {
                    this.growUpTime ++;
                    
                }else{
                    this.percent += 0.1;
                    this.growUpTime = 0;
                    this.j ++;
                }
            }
        this.shoot(); 

        }
        
        this.y -= this.dy;
        this.x += this.dx;

        if(this.isVerticalcollision() )
            this.dy = -this.dy;
        if(this.isHorizontalCollision())
            this.dx = -this.dx;
    }

    shoot() {
        console.log("Shot");
        // const angle = getAngle(this.x,this.y,ship.x,ship.y);
        if(this.y < (stageHeight / 2)+100 ) {

            // const  y = trayectoryYbyX(this.x,angle); 
            const y = this.y;
            // console.log("Angle:",angle,"y:",y);
            const shootImage = document.getElementById("shoot-misile");
            collectionShoots.push(new Shoot(shootImage,this.x +25,y,7*5,12*5,"down",0.9));
        }

    }
}

class Shoot extends Base {
    constructor(image = null, x = 0,y = 0,width,height,direction = "up",speedPercent = 0.5) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
        this.dy = this.dx = speed * speedPercent;
        this.direction = direction;
        this.stop = false;
    }
    draw(){
        // if(this.image !== null) 
            ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }

    // collision()
    // {
        
    // }

    move() {
        if(this.direction == "up")
            this.y -= this.dy;
        else if(this.direction == "down")
            this.y += this.dy;
            //  console.log(this.x,this.y);
           

            // console.log(this.x,this.y);
    }
}
class Rectangle extends Base {
    constructor(x,y,w,h) {
        super();
        this.x =x ;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    draw(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x,this.y,this.w,this.h);
        
    }
    move(){

    }
}

// class Trayectory {
//     constructor(xStart,yStart,xEnd,yEnd){

//     //     let xs = 0,xe = 100; //xe=> end X position
//     // let ys = 0,ye = 100; //ys=> end Y position 
//     // let Dx = xe-xs;
//     // let Dy = ye-ys;
//     // let tan = Dx/Dy;
//     // let atan = Math.atan(tan);
//     // let angle = Math.atan((xe-xs)/ye-ys) * 180/Math.PI;

//         this.xs = xStart;
//         this.ys = yStart;
//         this.xe = xEnd;
//         this.ye = yEnd;
//         this.angle = Math.atan((this.xe-this.xs)/(this.ye-this.ys)) * 180/Math.PI;
//     }
//     /**
//      * 
//      * @param x
//      * @returns Float 
//      */
//     getPositionYbyX(X){
//         // const AngleRads  = (angle * Math.PI/180);
//         // y = x/(Math.tan(AngleRads));
        
//         const AngleRads  = (this.angle * Math.PI/180);
//         return this.angle;
//         return X/(Math.tan(AngleRads));
//     }

//     getPositionXbyY(Y){
//         const AngleRads  = (this.angle * Math.PI/180);
//         return Y*(Math.tan(AngleRads));
//     }
// }