var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 30, 90);
  movingRect = createSprite(400,200,80,30);
  fixedRect.velocityX = 2;
  movingRect.velocityX = -2;
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}

function draw() {
  background(0);  
  bounceOff(fixedRect,movingRect);
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;
if(istouching(fixedRect, movingRect)){
  movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
}
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  drawSprites();
}

