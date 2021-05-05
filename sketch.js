
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1400, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);
	groundObject=new ground(700,670,width,20);
	dustbinObj=new dustbin(1000,650);
	sling = new Projectile(paperObject.body,{x:300,y:200})
	//Create a Ground
	g1 = new ground(1390,350,20,700)	




	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  sling.display(); 
g1.display()
  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:140,y:-155});

    
  	}
}


function mouseDragged(){
	Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased()
  {
	sling.fly();
  }
  
  function keyPressed()
  {
	if(keyCode === 32)
	{
	  sling.attach(paperObject.body);
	}
	Matter.Body.setPosition(paperObject.body, {x: 300, y: 200});
  }

