//using a for loop draw a set of 100 shapes, can be in a row

function setup() {
  //createCanvas(windowWidth,windowHeight);
  createCanvas(500,500);
  background(100);
  frameRate(12);
}

/*function draw() {
	for (x=0;x<100;x++) {
		for (y=0;y<100;y++) {
			ellipse(x*12,y*12,10,10);
		}
	}

  //alternate solution, using while loop
	 /*var x=0;
	 var y =0;
	 while(x < 20){
	 	 while(y < 10){
	 		ellipse(x*10, y*10, 5, 5);
			y++;
	 	  }
	 	y=0;
	 	x++;
	}*/


function draw() {
 background(0);
 //var x = 0;
  //var y = 0;
  //background(45,43,100);
  //stroke(255);
  //beginShape(LINES);
  for (var x= 0; x < 80; x++) {
    for (var y = 0; y< 80;y++) {
      rect(x*random(10),y*random(10),50,50);
      //ellipse(x*10,y*10,400,100);
      //sfill(random(255,67,45));
    }

  }
  //endShape();


//  fill(random(255,67,45));

}


/*function setup(){
  createCanvas(400,400);
  frameRate(10);
  noStroke();
}

function draw(){
  background(255);
  var circleWidth = 400.0;

  for(var i = 1; i <= numCircles; i++){
    fill(random(255), random(255), random(255));
    ellipse(width/2, height/2, circleWidth, circleWidth);
    circleWidth-=40.0;
  }
}*/
