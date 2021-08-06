var ball
function setup() {
ball=createSprite(75,200,15,15);
ball.shapeColor="blue"
  createCanvas(400,400);
}

function draw() 
{
  background(30);
  drawSprites()
if (keyDown (LEFT_ARROW))
{ 
ball.x=ball.x-5
}
if (keyDown (RIGHT_ARROW))
{ 
ball.x=ball.x +5
}
}





