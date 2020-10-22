class Ground{

    constructor(x,y,width,height){

     var options = {

            isStatic : true

        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body );

    }

    create(){

        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        

    }

}