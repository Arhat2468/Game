var towerImg, tower;
var rocketImg, rocket;
var starImg, star, starsGroup;
var asteriod, asteriodImg, asteriodsGroup;

var gameState = "play"

function preload(){
    towerImg = loadImage("background1 img.png");
    rocketImg = loadImage("rocket 2 img.png");
    starImg = loadImage("star 2 img.png");
    asteriodImg = loadAnimation("asteriod 2 ing", "asteriod img");

}

function setup() {
    createCanvas(600,600);
    
    tower = createSprite(300,300);
    tower.scale = 3;
    tower.addImage("tower",towerImg);
    tower.velocityY = 1;
    
    rocketsGroup = new Group();
    asteriodsGroup = new Group();
    invisibleBlockGroup = new Group();
    
   rocket = createSprite(200,200,50,50);
   rocket.scale = 0.3;
   rocket.addImage("rocket", rocketImg);
}

function draw() {
    background(255);
    if(tower.y > 300){
        tower.y = 200
      } 
      if (gameState === "play") {
    
        if(keyDown("left_arrow")){
            rocket.x = rocket.x - 4;
    
          
        }
        if(keyDown("right_arrow")){
      
              rocket.x = rocket.x + 4;
    
          
          
        }

        if(keyDown("up_arrow")){
      
            rocket.y = rocket.y - 4;
  
        
        
      }  
        
      if(keyDown("down_arrow")){
      
        rocket.y = rocket.y + 4;

    
    
  }  

  if(asteriodsGroup.isTouching(rocket)){
    rocket.velocityY = 0;
  }
  if(invisibleBlockGroup.isTouching(rocket) || rocket.y > 600){
    rocket.destroy();
    gameState = "end"
  }

    drawSprites();
    }
}
