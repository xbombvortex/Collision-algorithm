var movingRect,fixedRect;


function setup() {
createCanvas(1850,900);
fixedRect=createSprite(925, 450, 400, 400);
fixedRect.shapeColor="BLUE";
movingRect=createSprite(200,200,100,100);
movingRect.shapeColor="BLUE";

}

function draw() {
background("GREY");  

movingRect.x=World.mouseX;
movingRect.y=World.mouseY;

if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
movingRect.shapeColor="RED";
fixedRect.shapeColor="RED";

}

else {
movingRect.shapeColor="BLUE";
fixedRect.shapeColor="BLUE";
}







drawSprites();
}