var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
rect3=createSprite(20,30,20,30)
}

function draw() 
{
  background(255,255,255);  
  movingRect.x=World.mouseX;
 
  movingRect.y=World.mouseY;
if(touching(movingRect,rect3))
{
  movingRect.shapeColor="red"
  movingRect.width=150
}
  

else
{
  movingRect.shapeColor="blue"
  movingRect.width=80
}

  drawSprites();
}

