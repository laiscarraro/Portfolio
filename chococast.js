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
}

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
}

function draw() {
  background(30);
  noStroke();
  var vol_lais = amp_lais.getLevel();
  var vol_anna = amp_anna.getLevel();
  var vol_hoffman = amp_hoffman.getLevel();
  fill(255);
  ellipse(windowWidth/4, windowHeight/2, 150*vol_lais, 150*vol_lais);
  ellipse(windowWidth/2, windowHeight/2, 150*vol_anna, 150*vol_anna);
  ellipse(3*windowWidth/4, windowHeight/2, 150*vol_hoffman, 150*vol_hoffman);
}