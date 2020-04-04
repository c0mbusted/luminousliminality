let caso=0;
let triwidthright=500;
let triwidthleft=100;
let y=10;
let floor=600;

function setup () {
   createCanvas(600, 600);
   frameRate(2);
}

function draw () {
    //for (var i = 0; i < 7; i++) {

  //triangles();
  beginShape(TRIANGLES);
  for (var i =0;i<20;i++) {
    
      noFill();
      triangle(width/2,y,triwidthleft,floor,triwidthright,floor);
      //vertex(width/2,y,triwidthleft,floor,triwidthright,floor);
      triwidthright-=10;
      triwidthleft+=10;
      floor-=10;
      y+=10;
      //caso++;
   
    //strokeWeight(2);
   /* noFill();
    vertex(width/2,y,triwidthleft,floor,triwidthright,floor);
    triangle(width/2,y,triwidthleft,floor,triwidthright,floor);
    caso++;
     //caso=2;
  
    //strokeWeight(2);
        //stroke(255,153,153);
    //noFill();
        //colorMode(RGB,255,153,153,1);
    triangle(width/2,floor,triwidthleft ,y,triwidthright ,y);
    triwidthright-=10;
    triwidthleft+=10;
    floor-=10;
    y+=10;
    caso++;*/
  }
  endShape();


}


/*function triangles() {
  for (var i =0; i<10;i++) {
    strokeWeight(2);
    noFill(0);
    triangle(width/2,y,triwidthleft,floor,triwidthright,floor);
  
    //triangle(width/2,floor,triwidthleft ,y,triwidthright ,y);
    triwidthright-=10;
    triwidthleft+=10;
    floor-=10;
    y+=10;
  }

}j

   
  if (caso!=1) {
    triangle(width/2,y,triwidthleft,floor,triwidthright,floor);
    

    triangle(width/2,floor,triwidthleft ,y,triwidthright ,y);
    triwidthright+=10;
    triwidthleft-=10;
    floor+=10;
    y-=10;
    caso-=1;
  //caso+=1;

  }
  //console.log(triwidthleft,triwidthright,floor,y);
  //it is drwing repeatedly over the other triangles

  /*if (caso>=42 && caso<=70) {
    //strokeWeight(2);
    stroke('white');
    triangle(width/2,y,triwidthleft,floor,triwidthright,floor);
    triwidthright+=10;
    triwidthleft-=10;
    floor+=10;
    y-=10;
    caso+=1;
  }
  if (caso>=42 && caso<=100) {
    //strokeWeight(2);
    stroke('white');
    //noFill();
        //colorMode(RGB,255,153,153,1);
    triangle(width/2,floor-10,triwidthleft-10,y,triwidthright+10 ,y+10);
    triwidthright-=10;
    triwidthleft+=10;
    floor-=10;
    y+=10;
    caso+=1;
  }*/


//}
