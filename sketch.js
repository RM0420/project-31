const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisionHeight = 300;
var ground

var particles = [];
var plinkos = [];
var divisions = [];

var engine, world

function setup() {
  
  createCanvas(480,800);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(240, 790, 800, 20)

  for(var k=0; k<=width; k=k=80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j, 75));
  }
  for(j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j, 175));
  }
  for(j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j, 275));
  }
  for(j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j, 375))
  }

}

function draw() {
  Engine.update(engine)
  background(0,0,0);
  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }

  for(var j=0; j<particles.length; j++){
    particles[j].display();
  }
  for(var k=0; k<divisions.length; j++){
    divisions[k].display();
  }
  for(var i=0; i<plinkos.length; j++){
    plinkos[i].display();
  }

  ground.display();

}