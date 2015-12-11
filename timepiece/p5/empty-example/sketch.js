 var waterHeight = 10;
 var dripX = 100;
 var dripY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background('rgb(20,150,300)');
  background('white');

  // -------------------------------------------------------
  // EXERCISE 3.2.A
  // Use the `translate` function to move the yellow
  // square to the center of the canvas
  // -------------------------------------------------------

  noStroke();
  fill ('blue');
  rect(0,290,windowWidth,windowHeight/12);
  rect(0,240,windowWidth,windowHeight/12);
  rect(0,200,windowWidth,windowHeight/12);
  rect(0,150,windowWidth,windowHeight/12);
  rect(0,100,windowWidth,windowHeight/12);
  rect(0,50,windowWidth,windowHeight/12);
  rect(0,0,windowWidth,windowHeight)/12;
  rect(0,0,900,10);
  rect(0,0,900,10);
  rect(0,0,900,10);
  rect(0,0,900,10);
 // textSize(300);
  //text('AM',-140,100);
  textSize(10);
  text('1:00',0,340);
  textSize(10);
  text('2:00',0,285);
  textSize(10);
  text('3:00',0,235);
  textSize(10);
  text('4:00',0,190);
  textSize(10);
  text('5:00',0,145);
  textSize(10);
  text('6:00',0,95);
  textSize(10);
  text('7:00',0,40);
  textSize(10);
  text('8:00',0,-9);
  textSize(10);
  text('9:00',0,-60);
  textSize(10);
  text('10:00',0,-117);
  textSize(10);
  text('11:00',0,-166);
  textSize(10);
  text('12:00',0,-216);
  fill('rgb(20,250,300)');
   noStroke ();
  rect(0,windowHeight-waterHeight,windowWidth, waterHeight);
  waterHeight = second() * 10;
  ellipse(dripX,dripY,10,10);

  // dripY = second()/ (windowHeight - waterHeight) * second();
  dripY += 1;
  console.log(dripY);

  }




function windowResize() {
  resizeCanvas(windowWidth, windowHeight);
}
