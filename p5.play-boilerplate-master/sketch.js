var fixed, moving

function setup() {
  createCanvas(800,400);
  moving=createSprite(400, 200, 50, 50);
  moving.shapeColor="pink"
fixed=createSprite(100,300,50,50);
fixed.shapeColor="purple"
bounceball=createSprite(200,200,50,50);
bounceball.shapeColor="green"
bounceball.velocityX=-4
bounceball.velocityY=4
}


function draw() {
  background(255,255,255);  
  moving.y=mouseY
  moving.x=mouseX

 if( isTouching(fixed,moving)){

  moving.shapeColor="blue"
    fixed.shapeColor="grey"
    
    
 }else{

  moving.shapeColor="pink"
    fixed.shapeColor="purple"
 }

bouneOff(bounceball,fixed);

  drawSprites();
}

