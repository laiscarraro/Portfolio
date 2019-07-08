var r = 0;
var g = 0;
var b = 0;
var a;

function setup() {
  a = createCanvas(100, 100);
  a.mouseOver(changeRed);
  a.mouseOut(changeBlack);
  a.mousePressed(changeGreen);
  a.mouseReleased(changeRed);
}

function draw() {
  fill(r, g, b);
  ellipse(50, 50, 80, 80);
}

function changeRed() {
  r = 255;
  g = 0;
  b = 0;
}

function changeBlack() {
  r = 0;
  g = 0;
  b = 0;
}

function changeGreen() {
  r = 0;
  g = 255;
  b = 0;
}