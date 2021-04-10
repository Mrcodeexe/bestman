class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.image1=loadImage("bat/Bestman-01.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        
        if(frameCount>200){
            image(this.image1, pos.x, pos.y+70, 150, 240);
        }
        else{
            image(this.image,pos.x,pos.y+70,300,300);
        }
        
    }
}
