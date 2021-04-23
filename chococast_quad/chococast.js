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

var rects = [];

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

function setup() {
  createCanvas(windowWidth, windowHeight-30);
  button = createButton('PLAY');
  button.mousePressed(toggleSong);

  for(var i = 0; i <= 200; i ++) {
    rects.push([random(20), random(35, 255)]);
  }

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

var y = 0;

function draw() {

  noStroke();
  fill(30);
  rect(0, windowHeight - 200, windowWidth, 200);
  rect(0, 0, windowWidth, 200);
  rect(0, 0, windowWidth/4 - 100, windowHeight);
  rect(windowWidth/4 + 100, 0, 140, windowHeight);
  rect(windowWidth/2 + 100, 0, 140, windowHeight);
  rect(3*windowWidth/4 + 100, 0, 500, windowHeight);

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

  var vol_musica = amp_musica.getLevel();
  var vol = map(vol_musica, 0, 1, 0, windowWidth/4);

  noStroke();

  for (var i = 0; i <= 200; i++) {
    fill(rects[i][1]);
    if(10*i < windowWidth/4 - 110 || 
      (10*i > windowWidth/4 + 110 && 10*i < windowWidth/2 - 110) ||
      (10*i > windowWidth/2 + 110 && 10*i < 3*windowWidth/4 - 110) ||
      (10*i > 3*windowWidth/4 + 110) ||
      windowHeight - vol*rects[i][0] - 100 > windowHeight - 200) {
      rect(10*i, windowHeight - vol*rects[i][0] - 100, 10, 10);
      //rect(10*i, vol*rects[i][0] + 100, 10, 10);
    } else {
      rect(10*i, windowHeight - 200, 10, 10);
      //rect(10*i, 200, 10, 10);
    }
  }
}