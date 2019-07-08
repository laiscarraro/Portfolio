
 var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  notoSerif = loadFont("NotoSerif-Regular.ttf");
  background(208, 221, 215);
  
  fill(89, 78, 54);
  textSize(32);
  textAlign(CENTER, CENTER);
  textFont(notoSerif);
  text("This is a text", 0, 20, windowWidth, 50);
}



function draw() {

}