var track, track_2;
var runner, runner_2;
var boundary,boundary_2;



function preload()
{
  track_2.loadImage("path.png");
  runner_2.loadAnimation("Runner-1.png","Runner-2.png");

  
}

function setup()
{
  createCanvas(400,400);
  track = createSprite(200,200);
  track.addImage("track",track_2);
  track.velocityY = 4;
  track.scale = 1.2;

  runner = createSprite(40,50);
  runner.addAnimation("runner",runner_2);

  boundary = createSprite(20,200,10,10);
  boundary_2 = createSprite(380,200,10,10);
  boundary.visible = false;
  runner.collide = boundary;
  runner.collide = boundary_2;

  if(path.y > 400)
  {
    path.y = height/2;
  }

}

function draw() 
{
  background(0);
  boundary.mouseX
}
