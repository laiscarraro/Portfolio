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
  lais = loadSound('mp3/lais.mp3');
  anna = loadSound('mp3/anna.mp3');
  hoffman = loadSound('mp3/hoffman.mp3');
  musica = loadSound('mp3/musica.mp3');
  img_lais = loadImage('lais.png');
  img_anna = loadImage('anna.png');
  img_hoffman = loadImage('hoffman.png');
}

var y;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(toggleSong);

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
  image(img_lais, windowWidth/4, 50 + windowHeight/2, 200, 200);
  image(img_anna, windowWidth/2, 50 + windowHeight/2, 200, 200);
  image(img_hoffman, 3*windowWidth/4, 50 + windowHeight/2, 200, 200);
}

function draw() {
  //fundo
  noStroke();
  fill(30);
  rect(0, windowHeight - 200, windowWidth, 200);
  rect(0, 0, windowWidth, 320);
  rect(0, 0, windowWidth/4 - 100, windowHeight);
  rect(windowWidth/4 + 100, 0, 140, windowHeight);
  rect(windowWidth/2 + 100, 0, 140, windowHeight);
  rect(3*windowWidth/4 + 100, 0, 500, windowHeight);

  //pessoinhas
  noFill();
  stroke(30);
  strokeWeight(50);
  ellipse(windowWidth/4, (50 + windowHeight/2), 250, 250);
  ellipse(windowWidth/2, (50 + windowHeight/2), 250, 250);
  ellipse(3*windowWidth/4, (50 + windowHeight/2), 250, 250);
  var vol_lais = amp_lais.getLevel();
  var vol_anna = amp_anna.getLevel();
  var vol_hoffman = amp_hoffman.getLevel();
  strokeWeight(8);
  stroke(255);
  ellipse(windowWidth/4, (50 + windowHeight/2), 211 + vol_lais*150, 211 + vol_lais*150);
  ellipse(windowWidth/2, (50 + windowHeight/2), 211 + vol_anna*150, 211 + vol_anna*150);
  ellipse(3*windowWidth/4, (50 + windowHeight/2), 211 + vol_hoffman*150, 211 + vol_hoffman*150);

  strokeWeight(1);
  //linha
  width = windowWidth;
  height = (50 + windowHeight/2) - 10;
  var vol_musica = amp_musica.getLevel();
  volhistory.push(vol_musica);
  stroke(255);
  //noFill();
  push();
  var currentY = map(vol_musica, 0, 1, height, 0);
  translate(350, height / 2 - currentY);
  beginShape();
  for (var i = 0; i < volhistory.length; i++) {
    y = map(volhistory[i], 0, 1, height, -15000);
    if(y <= 250) {
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