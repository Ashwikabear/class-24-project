
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trashpaper,trashcan1, trashcan2,trashcan3,ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
       

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
fill(440);
trashpaper = new Trash(200,200,40,40)
fill("red");
//trashcan1 = new  Trashcan(300,680,50,PI/2)
	//trashcan2 = new Trashcan(500,300,20,120)
 // trashcan3= new Trashcan(400,650,200,20)
 fill("white")
 ground = new Ground(600,height,1200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(40);
  trashpaper.display()
  //trashcan1.display()
 // trashcan2.display()
  
  //trashcan3.display()
  ground.display();
  keyPressed()
  drawSprites();
 
}

function keyPressed(){
//the trash  has to jump
if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(trashpaper.body,trashpaper.body.position,{x:105,y:200})
  Matter.Body.setStatic(trashpaper,true)
  }



}

