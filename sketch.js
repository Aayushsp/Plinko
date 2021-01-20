const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var divisionHeight = 300;

// Arrays down here.
var divisions = [];
var particles = [];
var plinkos = [];

function preload(){

}
function setup() {
  var canvas = createCanvas(400,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,795,800,10);

  for(var x = 0 ; x <= width; x = x + 80){
  divisions.push(new Ground(x, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var p = 40; p <= width; p = p + 50){
    plinkos.push(new Plinko(p, 75));
  }
  for(var a = 15; a <= width; a = a + 50){
    plinkos.push(new Plinko(a, 175));
  }
  for(var y = 40; y <= width; y = y + 50){
    plinkos.push(new Plinko(y, 275));
  }
  for(var z = 15; z <= width; z = z + 50){
    plinkos.push(new Plinko(z, 375));
  }

 
}


function draw() {
  Engine.update(engine);
  background(0); 

  for(var x = 0; x < divisions.length; x++){
    divisions[x].display();    
  }

  // This is for the PLINKOS.
  for(var d = 0; d < plinkos.length; d++){
    plinkos[d].display();
  }
  for(var e = 0; e < plinkos.length; e++){
    plinkos[e].display();
  }
  for(var f = 0; f < plinkos.length; f++){
    plinkos[f].display();
  }
  for(var g = 0; g < plinkos.length; g++){
    plinkos[g].display();
  }

  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-40, width/2+10), 10, 10));
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
 
 
 
  ground.display();
  
  drawSprites();
}