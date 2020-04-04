let caso=1;
let triwidthright=500;
let triwidthleft=100;
let y=0;
let floor=600;
//y=0;
//upside down TRIANGLE
//var triwidthright=500;
//var triwidthleft=100;

 function setup () {
   createCanvas(600, 600);
   frameRate(10);
  }

  function draw () {
    //for (var i = 0; i < 7; i++) {
      if (caso==1) {
        triangle(width/2,y,triwidthleft,floor,triwidthright,floor);
        //fill(143,25,65);
        triwidthright-=20;
        triwidthleft+=20;
        floor-=10;
        y+=20;
        caso=2;

      }
      //caso=2;
      if (caso==2) {
        strokeWeight(2);
        stroke(255,153,153);
        noFill();
        //colorMode(RGB,255,153,153,1);
        triangle(width/2,floor,triwidthleft ,y,triwidthright ,y);
        triwidthright-=20;
        triwidthleft+=20;
        floor-=10;
        y+=20;
        //caso=1;
      }
      caso=2;
    //}

}
