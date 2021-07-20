
var ship, ship_swimming, edges;
var sea;
var seaImage;

function preload(){
  ship_swimming = loadImage("ship-1.png");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(900,400);
  
  
  ship = createSprite(130,200,30,30);
  ship.addImage("swimming", ship_swimming);

sea  = createSprite(600,200,20,50);
  sea.addImage("sea",seaImage)

  edges = createEdgeSprites();
  
  
  ship.scale = 0.25;

}


function draw(){
  
  background("blue");
  sea.velocityX = -05
  if (sea.x<0){
    sea.x = sea.width/2;
  }

  
  //console.log(ship.y)
  
  
  if(keyDown("space") ||keyDown("UP_ARROW")){
    ship.velocityY = -10;
  }
  
  ship.velocityY = ship.velocityY + 0.5;
  
  
  ship.collide(sea)
  drawSprites();
}