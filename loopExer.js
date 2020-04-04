/*Using a for loop, draw a set of 100 shapes
 (lines are OK) in a row. If you're having trouble, you can ask questions
 in the discussion forum. A solution will be shown in the next section.*/

 function setup () {
   createCanvas(600, 600);
 }

 function draw() {
   background(0);

   /*var x=0;
   while (x<windowWidth) {
     triangle(x,500,width/2,random(5),random(x),random(5));

      x+=20;
   }*/
   var triwidthright=500;
   var triwidthleft=100;
   var triheight=5;
   for (var i = 0; i < 20; i++) {
     fill(random(147));
     triangle(width/2,triheight,triwidthleft,600,triwidthright,600);
     triwidthright-=10;
     triwidthleft+=10;
     triheight+=20;
   }

 }
