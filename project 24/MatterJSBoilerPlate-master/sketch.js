
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var g1,p1,d1,d2,d3;



function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

  g1 = new Ground(600,374,1200,20)
  p1 = new Paper(200,100,25);
  d1 = new Dustbin(1000,355,120,20);
  d2 = new Dustbin(930,315,20,100);
  d3 = new Dustbin(1050,315,20,100);

	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
 
  background("LIGHTGREEN");
  
  
  g1.display();
  p1.display();
  d1.display();
  d2.display();
  d3.display();
  
 keypressed();
 
 drawSprites();
}
function keypressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(p1.body,p1.body.position,{
      x : 85,
      y : -85
   })
  }
}