// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/jEwAMgcCgOA

var song;
var button;
var amp;

oboe_tmp = [3.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, 0.5, 0.5, 14.0, 0.5, 0.5, 0.5, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, 0.5, 0.5, 14.0, 0.5, 0.5, 0.5, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5, 0.5, 0.5, 0.5, 0.5]
bassoon_tmp = [33.0, 0.5, 0.5, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 3.5, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 40.0, 0.5, 0.5, 0.5, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 3.5, 1.0, 0.5, 0.5, 0.5, 1.0]
triangle_tmp = [5.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5]
contrabass_tmp = [5.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5]

var minimum = 0.5;
var rate = 4;

var sum_oboe = 0;
var sum_contrabass = 0;
var sum_bassoon = 0;
var sum_triangle = 0;

var index_oboe = 0;
var index_bassoon = 0;
var index_contrabass = 0;
var index_triangle = 0;

var vol_oboe = 0;
var vol_bassoon = 0;
var vol_triangle = 0;

last_fill_oboe = [255, 255, 255]
last_fill_bassoon = [255, 255, 255]
last_fill_triangle = [255, 255, 255]

function changeFillOboe() {
  if (last_fill_oboe[0] == last_fill_oboe[1]) {
    last_fill_oboe = [255, 0, 0];
    vol_oboe = 100;
  } else {
    last_fill_oboe = [255, 255, 255];
    vol_oboe = 0;
  }
}
function changeFillBassoon() {
  if (last_fill_bassoon[0] == last_fill_bassoon[1]) {
    last_fill_bassoon = [0, 255, 0];
    vol_bassoon = 100;
  } else {
    last_fill_bassoon = [255, 255, 255];
    vol_bassoon = 0;
  }
}
function changeFillTriangle() {
  if (last_fill_triangle[0] == last_fill_triangle[2]) {
    last_fill_triangle = [0, 0, 255];
    vol_triangle = 100;
  } else {
    last_fill_triangle = [255, 255, 255];
    vol_triangle = 0;
  }
}

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('ideia1_lofi.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight-30);
  button = createButton('PLAY');
  button.mousePressed(toggleSong);
  amp = new p5.Amplitude();
  frameRate(rate);
}

var ini = 0;

function draw() {
  background(30);
  noStroke();
  var vol = amp.getLevel();

  if (song.isPlaying() && ini == 0) {
    setTimeout(function() {
      console.log("interval");
    }, 5);
    ini = 1;
  }

  if (sum_triangle == triangle_tmp[index_triangle]) {
    changeFillTriangle();
    index_triangle = index_triangle + 1;
    sum_triangle = 0;
  }
  fill(last_fill_triangle[0], last_fill_triangle[1], last_fill_triangle[2]);
  for (var i = 10; i < windowHeight-10; i=i+50) {
    for (var j = 50; j < (windowWidth/3); j=j+50) {
      ellipse(j, i, 10 + vol*vol_triangle);
    }
  }

  if (sum_oboe == oboe_tmp[index_oboe]) {
    changeFillOboe();
    index_oboe = index_oboe + 1;
    sum_oboe = 0;
  }
  fill(last_fill_oboe[0], last_fill_oboe[1], last_fill_oboe[2]);
  for (var i = 10; i < windowHeight-10; i=i+50) {
    for (var j = (windowWidth/3) + 50; j < 2*(windowWidth)/3; j=j+50) {
      ellipse(j, i, 10 + vol*vol_oboe);
    }
  }

  if (sum_bassoon == bassoon_tmp[index_bassoon]) {
    changeFillBassoon();
    index_bassoon = index_bassoon + 1;
    sum_bassoon = 0;
  }
  fill(last_fill_bassoon[0], last_fill_bassoon[1], last_fill_bassoon[2]);
  for (var i = 10; i < windowHeight-10; i=i+50) {
    for (var j = 50 + 2*(windowWidth/3); j < 3*(windowWidth/3); j=j+50) {
      ellipse(j, i, 10 + vol*vol_bassoon);
    }
  }

  if (song.isPlaying()) {
    sum_oboe += 0.5;
    sum_bassoon += 0.5;
    sum_triangle += 0.5;
    console.log("NEW FRAME");
    console.log(sum_triangle);
    console.log(triangle_tmp[index_triangle]);
    console.log(" ");
  }

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