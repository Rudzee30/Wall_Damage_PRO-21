var bu,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,52);
  bu=createSprite(50, 200, 87, 10);
  bu.velocityX=speed;
  bu.shapeColor="White";
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
 
  
}

function draw() {
  
  background("Black");  
  if(hasCollided(bu,wall)){
    bu.velocityX=0;
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
     
    if(damage>10||damage===10){
      wall.shapeColor="Red";

    }
    if(damage<10){
      wall.shapeColor="Green";

    }
  }
  

  drawSprites();

}

function hasCollided(lbu,lwa){
  bulletRightEdge=lbu.x+lbu.width;
  wallLeftEdge=lwa.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}