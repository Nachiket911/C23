class Box{
    constructor(x, y, width, height){
        var options = { 
            restitution: 0.8,
            density : 1,
            friction:0.3
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(myWorld, this.body);
    }

    //Display Box object on screen
    display(){

        console.log(this.body);

        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle);        
       
        fill("red");
        rectMode (CENTER);
        rect (0, 0, this.width, this.height);
        pop ();
    }

}