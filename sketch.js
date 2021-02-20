var fireDragon,iceDragon ,iceFloor,fireFloor,rand
var fDragonimg,iDragonimg,fFloorimg,iFloorimg,floor1Group,floor2Group



function preload(){
fDragonimg = loadImage("images/fire dragon.png");
iDragonimg = loadImage("images/ice dragon.png");
fFloorimg = loadImage("images/fire floor.png");
iFloorimg = loadImage("images/ice floor.png");
}



function setup() {
  createCanvas(1450,750);
  fireDragon = createSprite(200,540,50,50)
  fireDragon.addImage(fDragonimg);
  fireDragon.scale = 0.35;
  iceDragon = createSprite(200,185,50,50)
  iceDragon.addImage(iDragonimg);
  iceDragon.scale = 0.5;
  //floor1Group= new Group ();
 

}

function draw() {
  background(106, 247, 252); 
  text("x:"+ mouseX + "y:"+ mouseY,mouseX,mouseY); 
rand =Math.round(random(60,80));

  if(frameCount % rand=== 0){
    iceFloor = createSprite(1400,236);
    iceFloor.addImage(iFloorimg);
    iceFloor.scale = 0.5;
    iceFloor.velocityX = -7;
  }
  firefloor();
  //randomFloor();
  drawSprites();
}

//function randomFloor(){
 // if(frameCount % 60===0){
 //var floor1 = createSprite(1400,236);
 //floor1.velocityX =-6
 //floor1.scale = 0.5;
 //var rand =Math.round(random(1,2));
 //switch(rand){

//case 1: floor1.addImage(fFloorimg);
   //     break; 
//case 2: floor1.addImage(iFloorimg);
  //    break;    
 //}
 //floor1Group.add(floor1);
 // }
//}

function firefloor(){
  rand2 =Math.round(random(81,100));
  if(frameCount % rand2 === 0){
    fireFloor = createSprite(1400,236);
   fireFloor.addImage(fFloorimg);
   fireFloor.scale = 0.5; 
    fireFloor.velocityX = -7;
  }
}