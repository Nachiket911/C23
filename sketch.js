//namespaceing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myEngine, box1, myWorld, circle, ground,box2;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  
 /* var options = { 
    isStatic: true
  }

  box = Bodies.rectangle(400, 390, 800, 20, options);

  World.add(myWorld, box);

  console.log(box);

  circle = Bodies.circle(400,200,20, {restitution:1})
  World.add(myWorld, circle);

  console.log(circle);

  JSON Object format - JS Object Notation{ 
    x : 400,
    y : 200

  }*/

  //Create an object for Box class
  box1 =  new Box(200,300,100,50);
  ground = new Ground(400,height,800,20);
  box2 =  new Box(250,100,50,100);

}

function draw() {
  Engine.update(myEngine);
  background(255,255,255);  
  //drawSprites();

  box1.display();
  box2.display();
  ground.create();

 /* fill("blue");
  ellipseMode(RADIUS);
  ellipse(circle.position.x,circle.position.y,20,20);*/
}