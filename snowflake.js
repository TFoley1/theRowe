/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */

// create global variables up here
var snowyBg;
var snowflakePic;
var mySnowflakes = [];
var totalSnowflakes = 75;

// var mainTextObj = {
//   x: windowWidth/2-windowWidth/24,
//   y: windowHeight/2,
//   color:"#ffffff",
//   stroke:"#60bbff",
//   strokeSize:12,
//   textSize:56
// }

class Snowflake {
  
  constructor() {
    this.x = random(50, width-50);
    this.y = random(20, height);
    this.width = random(15,50);
    this.height = this.width;
    this.yspeed = random(0.5, 2);
    this.xspeed= random(-1,1);
    
  }
  
  move() {
    this.y = this.y + this.yspeed;
    this.x = this.x + this.xspeed;
    this.xspeed = this.xspeed + random(-0.15,0.15);
    
    
    //if snowflake goes of bottom of screen
    if (this.y > height + 50) {
     this.y = random(-30,-10);
     this.x = random(50, width-50);
     this.width = random(15,50);
     this.height = this.width;
     this.yspeed = random(0.5, 2);
     this.xspeed= random(-1,1);
      
      
      
      //if snowflake goes off left or right side of screen
    if (this.x > width) {
      this.y = random(-30,-10);
      this.x = random(50, width-50);
      this.width = random(20,50);
      this.height = this.width;
      this.yspeed = random(0.5, 2);
      this.xspeed= random(-1,1);
      
    }
    }
  }
  
  show() {
    //fill("lightblue");
    //ellipse(this.x, this.y,this.width,this.width);
    image(snowflakePic, this.x, this.y, this.width, this.height);
  }
  
  
}


function mainText(userTextInput) {
   textSize(56)
   fill("#ffffff")
   stroke("#60bbff")
   strokeWeight(12)
   text(userTextInput,width/2-width/24,height/2)
}

function preload() {
  snowflakePic = loadImage("https://cdn.glitch.com/8eb942a8-1a89-42f0-b58d-4ee257e93083%2Fpixel_snowflake.png?v=1607957535611")
  snowyBg = loadImage("https://cdn.glitch.com/8eb942a8-1a89-42f0-b58d-4ee257e93083%2FsnowyBg.png?v=1607958710582");
}

function setup(){ // only when game loads
  createCanvas(windowWidth,windowHeight);
  
   for (var i = 0; i < totalSnowflakes; i++) {
     mySnowflakes[i] = new Snowflake();
   } 
  
}

function draw(){ // this is a built-in forever loop
 background(snowyBg);
  

   for (var i = 0; i < totalSnowflakes; i++) {
      mySnowflakes[i].move();
      mySnowflakes[i].show();
   } 
   mainText("XMAS :D")
  
}


