// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/jEwAMgcCgOA

var song;
var amp;
var button;
var osc;
var i = 0;
var play = false;
var c = false;

var volhistory = [];

oboe_tmp = [3.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, 0.5, 0.5, 14.0, 0.5, 0.5, 0.5, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, 0.5, 0.5, 14.0, 0.5, 0.5, 0.5, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 0.5, 0.5]
oboe_notes = ["R", 70, 74, 70, 72, 74, 70, 77, 75, 72, 69, 65, 63, 69, 70, 72, 79, 77, 74, 70, 65, 70, 74, 70, 72, 74, 70, 77, 75, 72, 69, 65, 63, 69, 70, 72, 69, 70, 74, "R", 77, 82, "R", 86, "R", 82, 77, "R", 74, 78, 74, 76, 78, 74, 79, 74, 79, 82, 81, 79, 77, 75, 74, 72, 77, 74, 70, 74, "R", 77, 82, "R", 70, 74, 70, 72, 74, 70, 77, 75, 72, 69, 65, 63, 69, 70, 72, 79, 77, 74, 70, 65, 70, 74, 70, 72, 74, 70, 77, 75, 72, 69, 65, 63, 69, 70, 72, 69, 70, 74, "R", 77, 82, "R", 86, "R", 82, 77, "R", 74, 78, 74, 76, 78, 74, 79, 74, 79, 82, 81, 79, 77, 75, 74, 72, 77, 74, 70, 74, "R", 77, 82]

bassoon_tmp = [33.0, 33.5, 0.5, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 3.5, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 40.0, 0.5, 0.5, 0.5, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 3.5, 1.0, 0.5, 0.5, 0.5, 1.0]
bassoon_notes = ["R", 53, 58, "R", 43, 41, 45, 48, 51, 55, 53, 50, 46, 43, 42, 41, 45, 48, 51, 55, 53, "R", 45, 42, 46, 45, 42, 46, "R", 50, "R", 53, 58, "R", 43, 41, 45, 48, 51, 55, 53, 50, 46, 43, 42, 41, 45, 48, 51, 55, 53, "R", 45, 42, 46, 45, 42, 46]

stringinstrument_tmp = [5.0, 6.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5]
stringinstrument_notes = [81, 80, 81, 80, 81, 81, 80, 81, 80, 81, 80, 81, 80, 81, 81, 80, 81, 80, 81, 80, 81, 80, 81, 81, 80, 81, 80, 81, 80, 81, 80, 81, 80, 80, "R", 80, 81, 80, 81, 80, 81, 81, 80, 81, 80, 81, 80, 81, 80, 81, 81, 80, 81, 80, 81, 80, 81, 80, 81, 81, 80, 81, 80, 81, 80, 81, 80, 81, 80, 80, "R", 80, 81, 80, 81, 80, 81, 81, 80, 81, 80, 81, 80, 81, 80, 81, 81, 80, 81, 80, 81, 80, 81, 80, 81, 81, 80, 81, 80, 81, 80, 81, 80, 81, 80, 80, "R", 80, 81, 80, 81, 80, 81, 81, 80, 81, 80, 81, 80, 81, 80, 81, 81, 80, 81, 80, 81, 80, 81, 80, 81, 81, 80, 81, 80, 81, 80, 81, 80, 81, 80, 80]

contrabass_tmp = [4.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5]
contrabass_notes = ["R", 46, [50, 53, 57], 46, [50, 53, 57], 48, [51, 55, 60], [51, 55, 60], 48, [51, 55, 60], 41, [45, 48, 51], 41, [45, 48, 51], 46, [50, 53, 57], [50, 53, 57], 46, [50, 53, 57], 46, [50, 53, 57], 46, [50, 53, 57], 48, [51, 55, 60], [51, 55, 60], 48, [51, 55, 60], 41, [45, 48, 51], 41, [45, 48, 51], 46, [50, 53, 58], [46, 50, 53], [41, 46, 50], "R", 36, [39, 43, 48], 36, [39, 43, 48], 34, [38, 41, 45], [38, 41, 45], 34, [38, 41, 45], 36, [39, 43, 48], 36, [39, 43, 48], 34, [38, 41, 45], [38, 41, 45], 34, [38, 41, 45], 42, [45, 50, 54], 42, [45, 50, 54], 43, [46, 50, 55], [46, 50, 55], 43, [46, 50, 55], 41, [45, 48, 53], 41, [45, 48, 53], 46, 50, 53, 58, "R", 46, [50, 53, 57], 46, [50, 53, 57], 48, [51, 55, 60], [51, 55, 60], 48, [51, 55, 60], 41, [45, 48, 51], 41, [45, 48, 51], 46, [50, 53, 57], [50, 53, 57], 46, [50, 53, 57], 46, [50, 53, 57], 46, [50, 53, 57], 48, [51, 55, 60], [51, 55, 60], 48, [51, 55, 60], 41, [45, 48, 51], 41, [45, 48, 51], 46, [50, 53, 58], [46, 50, 53], [41, 46, 50], "R", 36, [39, 43, 48], 36, [39, 43, 48], 34, [38, 41, 45], [38, 41, 45], 34, [38, 41, 45], 36, [39, 43, 48], 36, [39, 43, 48], 34, [38, 41, 45], [38, 41, 45], 34, [38, 41, 45], 42, [45, 50, 54], 42, [45, 50, 54], 43, [46, 50, 55], [46, 50, 55], 43, [46, 50, 55], 41, [45, 48, 53], 41, [45, 48, 53], 46, 53, 50, 46]

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
    play = false;
  } else {
    song.play();
    play = true;
  }
}

function preload() {
  song = loadSound('ideia1_lofi.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight-30);
  button = createButton('PLAY');
  button.mousePressed(toggleSong);
}

function draw() {
  background(0);
  if (!play) {
    fill(255);
    } else {
      if (c) {
        fill(255);
      } else {
        fill(255, 0, 0)
      }
      c = !c;
    }
  ellipse(windowWidth/2, windowHeight/2, 150)
  if (play && i < oboe_notes.length){
    frameRate(2/oboe_tmp[i]);
    i = i+1;
  }
  // var vol = amp.getLevel();
  // volhistory.push(vol);
  // stroke(0);
  // noFill();
  // push();
  // var currentY = map(vol, 0, 1, height, 0);
  // translate(0, height / 2 - currentY);
  // beginShape();
  // for (var i = 0; i < volhistory.length; i++) {
  //   var y = map(volhistory[i], 0, 1, height, 0);
  //   vertex(i, y);
  // }
  // endShape();
  // pop();
  // if (volhistory.length > width - 50) {
  //   volhistory.splice(0, 1);
  // }

  // stroke(0);
  // line(volhistory.length, 0, volhistory.length, height);
  // ellipse(100, 100, 200, vol * 200);
}