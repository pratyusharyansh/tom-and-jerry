var backgroundj,backgroundimg;
var tom,tomimg,tomwalking,tomsit;
var jerry,jerryimg,jerryteasingimg,jerry2img;
function preload() {
   // loading the images here
    tomimg= loadImage ("images/cat1.png");
    tomwalking= loadAnimation ("images/cat2.png","images/cat3.png");
    jerryimg= loadImage ("images/mouse1.png");
    backgroundimg = loadImage ("images/garden.png");
    jerryteasingimg = loadAnimation ("images/mouse3.png","images/mouse2.png");
    jerry2img = loadImage("images/mouse4.png");
    tomsitimg = loadImage("images/cat4.png");
}

function setup(){
    createCanvas(500,350);
   
    //garden
    backgroundj = createSprite(250,150)
    backgroundj.addImage("garden",backgroundimg)
    backgroundj.scale=0.6
    //creating tom and jerry sprites here
    tom=createSprite(400,300,25,25)
    tom.addImage("sleeping",tomimg) 
    tom.scale=0.1

    jerry=createSprite(50,300,25,25)
    jerry.addImage("cheese",jerryimg)
    jerry.scale=0.1
}

function draw() {

    background(225);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x <(jerry.width - tom.width)/2){
       tom.velocityX=0;
       tom.addAnimation("siting",tomsitimg)
       tom.changeAnimation("siting")
       jerry.addAnimation("finding",jerry2img)
       jerry.changeAnimation("finding")
    }
    keyPressed();              
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keyCode ===LEFT_ARROW) {
        jerry.addAnimation("teasing",jerryteasingimg);
        jerry.changeAnimation("teasing");
        jerry.frameDelay = 25;
        tom.addAnimation("walking",tomwalking);
        tom.changeAnimation("walking");
        tom.velocityX=-3;
        tom.frameDelay = 25;
}
  



}











































































































































































































































































































































































