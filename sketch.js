
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	
	
  	
	   bob1 = new Bob(160,400,this.r);
	   bob2 = new Bob(220,400,this.r);
	   bob3 = new Bob(280,400,this.r); 
	   bob4 = new Bob(340,400,this.r); 
	   bob5 = new Bob(400,400,this.r); 
	   roof = new Roof(450,10);
	   rope1 = new Rope(bob1.body,roof.body,-40,0)
	   rope2 = new Rope(bob2.body,roof.body,-32,0)
	   rope3 = new Rope(bob3.body,roof.body,0,0)
	   rope4 = new Rope(bob4.body,roof.body,32,0)
	   rope5 = new Rope(bob5.body,roof.body,40,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



