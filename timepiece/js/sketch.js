var speed1 = 0;
var speed2 = 0;
var speed3 = 0;
var speed4 = 0;
var speed5 = 0;
var speed6 = 0;
var mySound;

function preload() {
mySound = loadSound('../sound/NyanCat.mp3');
}

function setup() {
  createCanvas(800, 600);
  // set canvas height/width
  createCanvas(windowWidth, windowHeight);
  //soundFormats('mp3');
  mySound.setVolume(0.5);
  mySound.play();
}

function draw() {
  background(20,150,300);
  noStroke();


  // WHITE LINES
  //fill ('white');
  var c = color(random(225), random(225), random (255));
  fill (c);
  noStroke();
rect(0,height/24,width,10);
  rect(0,height/24 * 2,width,10); // change to 0, and change the width
  rect(0,height/24 * 3,width,10);
  rect(0,height/24 * 4,width,10);
  rect(0,height/24 * 5,width,10);
  rect(0,height/24 * 6,width,10);
  rect(0,height/24 * 7,width,10);
  rect(0,height/24 * 8,width,10);
  rect(0,height/24 * 9,width,10);
  rect(0,height/24 * 10,width,10);
  rect(0,height/24 * 11,width,10);
    rect(0,height/24 * 12,width,10);
      rect(0,height/24 * 13,width,10);
        rect(0,height/24 * 14,width,10);
          rect(0,height/24 * 15,width,10);
            rect(0,height/24 * 16,width,10);
              rect(0,height/24 * 17,width,10);
                rect(0,height/24 * 18,width,10);
                  rect(0,height/24 * 19,width,10);
                  rect(0,height/24 * 20,width,10);
                  rect(0,height/24 * 21,width,10);
                  rect(0,height/24 * 22,width,10);
                  rect(0,height/24 * 23,width,10);
 // textSize(300);
  //text('AM',-140,100);

  var y = height/24;
  fill('white');
  textSize(20);
  text('24:00',10,y); // change width
  textSize(20);
  text('23:00',10,y * 2);
  textSize(20);
  text('22:00',10, y * 3);
  textSize(20);
  text('21:00',10, y * 4);
  textSize(20);
  text('20:00',10, y * 5);
  textSize(20);
  text('19:00',10, y * 6);
  textSize(20);
  text('18:00',10,y *7);
  textSize(20);
  text('17:00',10,y * 8);
  textSize(20);
  text('16:00',10,y * 9);
  textSize(20);
  text('15:00',10,y * 10);
  textSize(20);
  text('14:00',10,y *11);
  textSize(20);
  text('13:00',10,y * 12);
  textSize(20);
  text('12:00',10,y * 13);
  textSize(20);
  text('11:00',10,y * 14);
  textSize(20);
  text('10:00',10,y * 15);
  textSize(20);
  text('9:00',10,y * 16);
  textSize(20);
  text('8:00',10,y * 17);
  textSize(20);
  text('7:00',10,y * 18);
  textSize(20);
  text('6:00',10,y * 19);
  textSize(20);
  text('5:00',10,y * 20);
  textSize(20);
  text('4:00',10,y * 21);
  textSize(20);
  text('3:00',10,y * 22);
  textSize(20);
  text('2:00',10,y * 23);
  textSize(20);
  text('1:00',10,y * 24);


  /* THIS CHUNK OF TEXT BELOW AFFECTS DROPS OR ANYTHING ELSE YOU CHOOSE */

  speed1 = speed1 + 5;
  if(speed1 > height) {
    speed1 = 0;
  }

  speed2 = speed2 + second();
  if(speed2 > height) {
    speed2 = 0;
  }

  speed3 = speed3 + 10;
  if(speed3 > height) {
    speed3 = 0;
  }

  fill('rgb(25,230,400)'); // change these numbers
  //var c = color(random(225), random(225), random (255));
  //fill (c);
  //noStroke();
  ellipse (60, -15, 90, 80);
  ellipse (150, -15, 100, 90);
  ellipse (100, 0, 15, 80); //still 1st drip
ellipse (width - 200,speed3, 25,250); // last drip
  //ellipse (400,speed + 100, 30,50); // middle small circle
  ellipse (400,speed1 + 10, 20,250); //middle long one
  ellipse (500,speed3, 15, 100);
  ellipse (900,speed1, 10, 100);
  ellipse (width-40,0, 300,300);
  ellipse (500,0, 400,300); //4th circle
  ellipse (750, 0, 300, 200);
  ellipse (250,0, 150,100); //3rd circle
  ellipse (0,0, 140,100); //1st circle
  ellipse (0, 0, 15,100);
  ellipse (100,speed1 + 20, 20,400); //1st drip
ellipse (width - 200,0, 20,80);
  //ellipse (width - 300,0, 100,100); //5 circle



//BOTTOM GROWING RECT
fill(25,230,400);
var growing = height/60 * second(); // this is the equation that affects movement for rect
// (starts at left of window, height equals window height minus starting height of bar minus the seconds, width, height of bar equals seconds times or plus whatever)
//var c = color(random(225), random(225), random (255));
//fill (c);
//noStroke();
rect(0,height-growing,width,growing); // x pos, y pos, width, height
//console.log("Current Second: " + second());
//console.log("Current Minute: " + minute());

speed4 = speed4 + 5;
if(speed4 > width) {
  speed4 = 0;
}

speed5 = speed5 + 5;
if(speed5 > width) {
  speed5 = 0;
}

speed6 = speed6 + 5;
if(speed6 > width) {
  speed6 = 0;
}
//var value = 0;
//function draw() {
//fill (value);
//triangle (130,570,200,590 ,130, 620);
//ellipse (220, 590, 110, 60);
//}
//function touchMoved() {
//  value = value + 5;
//  if (value > 255) {
//    value = 0;
//  }

//fish
var growing = height/60 * second();
var c = color(random(225), random(225), random (255));
fill (c);
translate (speed4, height-growing, width,growing);
ellipse (100, 100, 110, 60);
triangle (0,70,70,100 ,0, 130);

var c = color(random(225), random(225), random (255));
fill (c);
translate (speed4, height-growing, width,growing);
translate (0,-50);
triangle (0,220,70,250 ,0, 280);
ellipse (100, 250, 110, 60);

var c = color(random(225), random(225), random (255));
fill (c);
translate (speed4, height-growing, width,growing);
//translate (0, -50);
triangle (0,390,70,420 ,0, 450);
ellipse (100, 420, 110, 60);

//console.log("Current Second: " + second());
//console.log("Current Minute: " + minute());
//triangle (130,570,50,590 ,130, 620);
//ellipse (40, 590, 110, 60);

//ellipse(140,77,10,10);

//	beginShape();
//vertex(140, 77);
//vertex(180, 77);
//vertex (215,89);
//vertex (217, 115);
//vertex (190, 103);
//vertex (140, 103);
//vertex (130, 117);

//endShape();

    var value = 25;
    var m = map(value, 0, 100, 0, width);
  }




function windowResize() {
  resizeCanvas(windowWidth, windowHeight);
}
