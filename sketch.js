var player1, player2;
var start, startImage;
var gameState = 0;
var end
var score = 0;
var score2 = 0;
var deaths = 0;
var deaths2 = 0;
var bg, bgImage;
var fireballImage;

function preload(){
  startImage = loadImage("start.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  obstacleGroup = new Group();
  start = createSprite(windowWidth/2, windowHeight/2);
  start.addImage(startImage);
  start.scale = 0.2;
  player1 = createSprite(windowWidth/2-600,windowHeight/2-200, 20,20);
  player1.shapeColor= 'lightBlue'
  player2 = createSprite(windowWidth/2-600,windowHeight-150, 20,20);
  player2.shapeColor= 'pink'

  end = createSprite(windowWidth-60, windowHeight/2);
  end.shapeColor = 'blue'
}

function draw(){
  background('purple');
  
  if(mousePressedOver(start)){
    gameState = 1;
  }
  if(gameState === 1){
    spawnObstacles();
    textSize(25);
    stroke('green');
    text("Player 1 Score:"+ score, windowWidth/2-650,windowHeight/6-10);
    textSize(25);
    text("Player 2 Score:"+ score2, windowWidth/2-650, windowHeight/2+150);
    textSize(25);
    stroke('red');
    text("Player 1 Deaths:"+ deaths, windowWidth/2-650,windowHeight/3);
    textSize(25);
    text("Player 2 Deaths:"+ deaths2, windowWidth/2-650, windowHeight/2+270);
    
    if(keyDown("LEFT")){
      player1.x -=4;
    }
    if(keyDown("RIGHT")){
      player1.x += 4;
    }
    if(keyDown("UP")){
      player1.y -=4;
    }
    if(keyDown("DOWN")){
      player1.y +=4;
    }

    if(keyDown("a")){
      player2.x -=4;
    }
    if(keyDown("d")){
      player2.x += 4;
    }
    if(keyDown("w")){
      player2.y -=4;
    }
    if(keyDown("s")){
      player2.y +=4;
    }
    
    if(player1.isTouching(obstacleGroup)){
      player1.x = windowWidth/2-600
      deaths = deaths+1;
      obstacleGroup.destroyEach();
    }
    if(player2.isTouching(obstacleGroup)){
      player2.x = windowWidth/2-600
      deaths2 = deaths+1;
    }
    start.destroy();
  }
  
  if(player1.isTouching(end)){
    score+=1;
    player1.x = windowWidth/2-600
  }
  if(player2.isTouching(end)){
    score+=1;
    player2.x = windowWidth/2-600
  }
  drawSprites();
}

function spawnObstacles(){
  if(frameCount%20 === 0){
    
  obstacle = createSprite(windowWidth/2, windowHeight-1000);
  obstacle.shapeColor = 'magenta';
  obstacle.velocityY = 20;
  obstacle.x = random(windowHeight/4, windowWidth/2+500);
  obstacleGroup.add(obstacle);
  }
}

