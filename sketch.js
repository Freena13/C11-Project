var track, track_2;
var runner, runner_2;



function preload()
{
  track_2.loadImage("path.png");

  
}

function setup()
{
  createCanvas(400,400);
  track = createSprite(200,200,50,50);
  track.addImage("track",track_2);
  track.velocityY = 3;

}

function draw() 
{
  background(0);
}
