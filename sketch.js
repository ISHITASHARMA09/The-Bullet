var bullet
var thickness
var wall
var speed
var weight
var damage

function setup() {
  createCanvas(1300,900);
  bullet = createSprite(100, 200, 20, 100);
  bullet.velocityX=1;

  wall =createSprite(900 , 350, 500 , 500)
 bullet.shapeColor="green";
 wall.shapeColor="green";

}

function draw() {
  background(0);  
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);


  if (collided(bullet , wall)){

    bullet.velocityX=0
  
    damage=0.5 * weight* speed * speed/(thickness*thickness*thickness)
  
  
    if(damage>10){
      wall.shapeColor="red";
    }
  
    if(damage<10){
     wall.shapeColor="yellow";
    }
  }
  drawSprites();
}








