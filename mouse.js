//second triangle is dependent on conditional expression evaluating width of first rect
function setup() {
  createCanvas(600,600);
  background(100);

}
//background in setup will make the rects lag on while in draw it will look as only 1 rect
function draw() {
  //rect(mouseX,mouseY,50,50);
  //fill(255,0,0);

  /*if (mouseX<=200 && mouseY<=150) {
    ellipse(mouseX,mouseY, 50,50);
  }*/

//frst rect
  rect(width/2,height/2,50,50);

  var rectwidth;
  var rectheight;

  if (width/2<300) {
    rectwidth=80;
    rectheight=50;


  }else {
    rectwidth=120;
    rectheight=90;
  }

  rect(10,10,rectwidth,rectheight);



}
