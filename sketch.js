//Cuong Le hwk 3
// var x;

function setup() {
  createCanvas(500, 500);
}

function draw(){
  background(150,0,120);
  // x = 20;
  fill(0,150,150);
  //  println(x, "width=", width, "height=", height);
  for (var x = 0; x < width+50; x = x + 10){
    for (var y = 0; y < height+50; y = y + 10){
      //do y/20 for the original
      ellipse(x, y, x + 30, y/100);
      fill(90,0,20);
      //  println("the value n", n);
      ellipse(x, y, y/10);
      fill(180,20,0);
      //ine(10, 10, width, height);
      line(x,y,220,120);
      //ellipse(x + 40, 30, x);
      //  ellipse(x + 60, 50, x);
    }
  }
}
