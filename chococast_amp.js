// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/jEwAMgcCgOA

var lais;
var anna;
var hoffman;
var musica;

var button;

var amp_lais;
var amp_anna;
var amp_hoffman;
var amp_musica;

var img_lais;
var img_anna;
var img_hoffman;

var volhistory = [];

function toggleSong() {
  if (lais.isPlaying()) {
    lais.pause();
    anna.pause();
    hoffman.pause();
    musica.pause();
  } else {
    lais.play();
    anna.play();
    hoffman.play();
    musica.play();
  }
}

function preload() {
  lais = loadSound('lais.mp3');
  anna = loadSound('anna.mp3');
  hoffman = loadSound('hoffman.mp3');
  musica = loadSound('musica.mp3');
  img_lais = loadImage('lais.png');
  img_anna = loadImage('anna.png');
  img_hoffman = loadImage('hoffman.png');
}

var y;

function setup() {
  createCanvas(windowWidth, windowHeight-30);
  button = createButton('PLAY');
  button.mousePressed(toggleSong);

  amp_lais = new p5.Amplitude();
  amp_lais.setInput(lais);
  amp_anna = new p5.Amplitude();
  amp_anna.setInput(anna);
  amp_hoffman = new p5.Amplitude();
  amp_hoffman.setInput(hoffman);
  amp_musica = new p5.Amplitude();
  amp_musica.setInput(musica);
  background(30);
  imageMode(CENTER);
  image(img_lais, windowWidth/4, windowHeight/2, 200, 200);
  image(img_anna, windowWidth/2, windowHeight/2, 200, 200);
  image(img_hoffman, 3*windowWidth/4, windowHeight/2, 200, 200);
}

function draw() {
  //fundo
  noStroke();
  fill(30);
  rect(0, windowHeight - 200, windowWidth, 200);
  rect(0, 0, windowWidth, 200);
  rect(0, 0, windowWidth/4 - 100, windowHeight);
  rect(windowWidth/4 + 100, 0, 140, windowHeight);
  rect(windowWidth/2 + 100, 0, 140, windowHeight);
  rect(3*windowWidth/4 + 100, 0, 500, windowHeight);

  //pessoinhas
  noFill();
  stroke(30);
  strokeWeight(50);
  ellipse(windowWidth/4, windowHeight/2, 250, 250);
  ellipse(windowWidth/2, windowHeight/2, 250, 250);
  ellipse(3*windowWidth/4, windowHeight/2, 250, 250);
  var vol_lais = amp_lais.getLevel();
  var vol_anna = amp_anna.getLevel();
  var vol_hoffman = amp_hoffman.getLevel();
  strokeWeight(8);
  stroke(255);
  ellipse(windowWidth/4, windowHeight/2, 211 + vol_lais*150, 211 + vol_lais*150);
  ellipse(windowWidth/2, windowHeight/2, 211 + vol_anna*150, 211 + vol_anna*150);
  ellipse(3*windowWidth/4, windowHeight/2, 211 + vol_hoffman*150, 211 + vol_hoffman*150);

  strokeWeight(1);
  //linha
  width = windowWidth;
  height = windowHeight/2 - 10;
  var vol_musica = amp_musica.getLevel();
  volhistory.push(vol_musica);
  stroke(255);
  //noFill();
  push();
  var currentY = map(vol_musica, 0, 1, height, 0);
  translate(350, height / 2 - currentY);
  beginShape();
  for (var i = 0; i < volhistory.length; i++) {
    y = map(volhistory[i], 0, 1, height, -5000);
    if(y <= 200) {
      y = map(volhistory[i], 0, 1, height, 0);
    }
    vertex(i, y);
  }
  endShape();
  pop();
  if (volhistory.length > width - 700) {
    volhistory.splice(0, 1);
  }
}