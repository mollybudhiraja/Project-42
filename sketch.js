var canvas;
var spacecraft 
var iss;
var iss_img, spacebg, spacecraft1_img, spacecraft2_img, spacecraft3_img, spacecraft4_img;
var hasDocked = false;
function preload(){
  iss_img = loadImage("images/iss.png");
  spacebg = loadImage("images/spacebg.jpg");
  spacecraft1_img = loadImage("images/spacecraft1.png");
  spacecraft2_img = loadImage("images/spacecraft2.png");
  spacecraft3_img = loadImage("images/spacecraft3.png");
  spacecraft4_img = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(600,350);
 iss= createSprite(300,130);
 iss.addImage(iss_img);
 iss.scale= 0.25;

  spacecraft = createSprite(285,240);
  spacecraft.addImage(spacecraft1_img);
  spacecraft.scale = 0.15;

  
}

function draw() {
  background(spacebg); 
  spacecraft.addImage(spacecraft1_img);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
  } 
  if (keyDown("UP_ARROW")){
 spacecraft.y=spacecraft.y-2;
  }
  if (keyDown("LEFT_ARROW")){
    spacecraft.addImage(spacecraft3_img);
    spacecraft.x=spacecraft.x-2;
     }
     if (keyDown("RIGHT_ARROW")){
       spacecraft.addImage(spacecraft2_img);
      spacecraft.x=spacecraft.x+1;
      
       }
       if (keyDown("DOWN_ARROW")){
        spacecraft.y=spacecraft.y-2;
        spacecraft.addImage(spacecraft1_img);
         }

         if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
           hasDocked = true;
           textSize(25);
           fill("white");
           text("Docking Successful", 200,300);


         }
  drawSprites();
}