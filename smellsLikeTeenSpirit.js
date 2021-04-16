let cello, vln1, vln2, viola;
let cello_amp, vln1_amp, vln2_amp, viola_amp;
var img;

function preload(){
  vln1 = loadSound('Smells_Like_Teen_Spirit_REMASTERED_vln1.mp3');
  vln2 = loadSound('Smells_Like_Teen_Spirit_REMASTERED_vln2.mp3');
  viola = loadSound('Smells_Like_Teen_Spirit_REMASTERED_viola.mp3');
  cello = loadSound('Smells_Like_Teen_Spirit_REMASTERED_cello.mp3');
  img = loadImage("vln2.svg");
  img2 = loadImage("vln.svg");
  svgs = [];
  for (var i = 1; i <= 36; i++) {
    svgs[i-1] = loadImage(+str(i)+".svg");
  }
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(toggleSound);
  vln1_amp = new p5.Amplitude();
  vln1_amp.setInput(vln1);
  vln2_amp = new p5.Amplitude();
  vln2_amp.setInput(vln2);
  viola_amp = new p5.Amplitude();
  viola_amp.setInput(viola);
  cello_amp = new p5.Amplitude();
  cello_amp.setInput(cello);
}

function draw() {
  background(35, 32, 32);
  noStroke();

  imageMode(CENTER);
  for (var i = 0; i <= 35; i++) {
    image(svgs[i], i*10, 500 - i*10);
  }

  let level_vln1 = vln1_amp.getLevel();
  let size = map(level_vln1, 0, 1, 50, 1000);
  tint(47, 44, 44);
  image(img, 80, 150, 400, 400);
  if(!vln1.isPlaying()) {
    tint(47, 44, 44);
  } else {
    tint(116, 142, 84, size);
  }
  tint(255);
  image(img2, 210, 150, 120, 350);
  vln1_amp.smooth();

  let level_vln2 = vln2_amp.getLevel();
  let size2 = map(level_vln2, 0, 1, 50, 1000);
  tint(47, 44, 44);
  image(img, 340, 150, 400, 400);
  if(!vln2.isPlaying()) {
    tint(47, 44, 44);
  } else {
    tint(156, 145, 79, size2);
  }
  tint(255);
  image(img2, 470, 150, 120, 350);
  vln2_amp.smooth();

  let level_viola = viola_amp.getLevel();
  let size3 = map(level_viola, 0, 1, 50, 1000);
  tint(47, 44, 44);
  image(img, 570, 100, 1.2*400, 1.2*400);
  if(!viola.isPlaying()) {
    tint(47, 44, 44);
  } else {
    tint(149, 94, 66, size3);
  }
  tint(255);
  image(img2, 725, 100, 150, 420);
  viola_amp.smooth();

  let level_cello = cello_amp.getLevel();
  let size4 = map(level_cello, 0, 1, 50, 1000);
  tint(47, 44, 44);
  image(img, 800, 20, 1.5*400, 1.5*400);
  if(!cello.isPlaying()) {
    tint(47, 44, 44);
  } else {
    tint(85, 55, 57, size4);
  }
  tint(255);
  image(img2, 995, 20, 180, 530);
  cello_amp.smooth();
}

function toggleSound() {
  if (cello.isPlaying() ){
    vln1.stop();
    vln2.stop();
    viola.stop();
    cello.stop();
  } else {
    vln1.play();
    vln2.play();
    viola.play();
    cello.play();
  }
}