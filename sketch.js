var trex ,trex_running;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(100,100,50,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5

  edges = createEdgeSprites();
  ground = createSprite(00,190,1200,20)

 
}

function draw(){
  background("lightgrey");

  if(keyDown("space")){
    trex.velocityY = -8;
  }
  trex.velocityY = trex.velocityY + 1;

  trex.collide(ground);

  drawSprites();
  

}
