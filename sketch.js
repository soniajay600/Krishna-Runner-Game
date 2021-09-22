

function preload(){
  krishnnaimg=loadAnimation("images/run1.png","images/run2.png");
  bgImg=loadImage("images/bg3.jpg");
  potImg=loadImage("images/butter.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);

bgSprite=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
bgSprite.scale=0.5;

krishsprite=createSprite(200,380,40,40);
krishsprite.addAnimation("run",  krishnnaimg)
invisibleg=createSprite(200,570,50*windowWidth,10);

if(frameCount % 60 === 0){
  var Butterpot = createSprite(windowWidth-100,350,30,30);
  Butterpot.addImage(potImg);
  Butterpot.velocityX=-5;
}
krishsprite.velocityX=8;
//console.log(windowHeight);
  
}

function draw() {
  background("white");
  bgSprite.addImage(bgImg);
  camera.position.x=krishsprite.x+350;
  camera.position.y=400;
  if(keyDown("space")){
    krishsprite.velocityY=-20;
  }
  krishsprite.velocityY=krishsprite.velocityY+2;
  krishsprite.collide(invisibleg);

  //spawnButterpot();
  drawSprites();
}

/*function spawnButterpot(){
  
}*/