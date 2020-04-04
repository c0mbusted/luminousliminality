
var theta=0.0;
var rotationSpeed=0.001;

 function setup () {
   createCanvas(600, 600);
   //frameRate(10);
  }

  function draw () {
    var triwidthright=500;
    var triwidthleft=100;
    var y=0;
    var floor=600;
    for (var i = 0; i < 10; i++) {
      //fill(random(147));
      noFill();
      strokeWeight(2);
      triangle(width/2,y,triwidthleft,floor,triwidthright,floor);
      triwidthright-=20;
      triwidthleft+=20;
      floor-=10;
      y+=20;
    }

    y=0;
    floor=600;
    //rotating TRIANGLE
    var rightcorner=500;
    var leftcorner=100;

    for (var i = 0; i < 10; i++) {
      strokeWeight(2);
      //stroke(255,153,153);
      noFill();
      //colorMode(RGB,255,153,153,1);
      triangle(width/2,floor,leftcorner ,y,rightcorner ,y);

      rightcorner-=20;
      leftcorner+=20;
      floor-=10;
      y+=20;

    }


    //theta+=rotationSpeed;
  }

 /*function draw() {
   background(0);

   beginShape(TRIANGLES);

   for (var i = 0; i < 80; i++) {
     vertex(i*random(10), random(height));
     fill(random(234),random(67), random(190));
   }

   endShape(CLOSE);*/




   /*var triwidthright=500;
   var triwidthleft=100;
   var triheight=5;
   for (var i = 0; i < 20; i++) {
     fill(random(147));
     triangle(width/2,triheight,triwidthleft,600,triwidthright,600);
     triwidthright-=10;
     triwidthleft+=10;
     triheight+=20;
   }*/
