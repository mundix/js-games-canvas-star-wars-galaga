class Base {
    collission(){

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
        // this.shootImage = document.getElementById("shoot-laser");
         
    }
    draw(){
        if(this.image !== null) 
            ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
        
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
        
        // this.y -= this.dy;
        // this.x += this.dx;

        // if(this.isVerticalcollision())
        //     this.dy = -this.dy;
        // if(this.isHorizontalCollision())
        //     this.dx = -this.dx;
            
    }
    shoot() {
        const shootImage = document.getElementById("shoot-laser");
        const shoot = new Shoot(shootImage,this.x+(this.width/2)-4,this.y,10,29);
        collectionShoots.push(shoot);
    }
}

class Alien extends Base {
    constructor(image = null, x = 0,y = 0,width,height,percent,sprites = [0,127]) {
        super();
        const  randomNumber = Math.random();
        this.transition = (randomNumber>=5)?5:randomNumber; //transition speed
        this.x = x;
        this.y = y;
        this.width = width;
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
                this.height*this.percent,this.height*this.percent);

                // ctx.font = "30px Comic Sans MS";
                // ctx.fillStyle = "white";
                // ctx.textAlign = "center";
                // ctx.fillText("x:"+this.x+",y:"+this.y, this.x, this.y);           
    }

    isVerticalcollision()
    {
        if( (this.y <= 0 || this.y >= stageHeight-this.height*this.percent) ) 
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

        if(this.transitionTime < 300){
            this.transitionTime ++;
        }else{
            //Controlling aceleration casualities not more than 5.5 
            this.transition = Math.random() * 10;
            this.dy = this.dx =  (this.transition - 3)>5?5.5:(this.transition - 3) ;
            
            // console.log(this.dy);
            this.transitionTime = 0;
            if(this.j < 5)
            {

                if(this.growUpTime < 3) {
                    this.growUpTime ++;
                    
                }else{
                    this.percent += 0.1;
                    this.growUpTime = 0;
                    this.j ++;
                }
            }
        // this.shoot(); 

        }
        
        this.y -= this.dy;
        this.x += this.dx;

        if(this.isVerticalcollision())
            this.dy = -this.dy;
        if(this.isHorizontalCollision())
            this.dx = -this.dx;
            
            
    }

    shoot() {
        const shootImage = document.getElementById("shoot-misile");
        const shoot = new Shoot(shootImage,this.x +25,this.y+25,7*5,12*5,"down",0.9);
        collectionShoots.push(shoot);
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
    }
    draw(){
        // if(this.image !== null) 
            ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }

    collision()
    {
        if( (this.y <= (0 + this.height) || (this.y >= innerHeight-this.height)) ) 
            return true;
        return false;
    }

    move() {
        if(this.direction == "up")
            this.y -= this.dy;
        else if(this.direction == "down")
            this.y += this.dy;
    }
}