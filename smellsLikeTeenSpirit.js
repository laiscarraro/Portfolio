let cello, vln1, vln2, viola;
let cello_amp, vln1_amp, vln2_amp, viola_amp;

function preload(){
  vln1 = loadSound('Smells_Like_Teen_Spirit_REMASTERED_vln1.mp3');
  vln2 = loadSound('Smells_Like_Teen_Spirit_REMASTERED_vln2.mp3');
  viola = loadSound('Smells_Like_Teen_Spirit_REMASTERED_viola.mp3');
  cello = loadSound('Smells_Like_Teen_Spirit_REMASTERED_cello.mp3');
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

  let level_vln1 = vln1_amp.getLevel();
  let size = map(level_vln1, 0, 1, 50, 500);
  fill(116, 142, 84);
  ellipse((windowWidth - (windowWidth/8) - 50)/4, windowHeight/2, size, size);
  vln1_amp.smooth();

  let level_vln2 = vln2_amp.getLevel();
  let size2 = map(level_vln2, 0, 1, 50, 500);
  fill(156, 145, 79);
  ellipse((windowWidth - (windowWidth/8) - 50)/2, windowHeight/2, size2, size2);
  vln2_amp.smooth();

  let level_viola = viola_amp.getLevel();
  let size3 = map(level_viola, 0, 1, 50, 500);
  fill(149, 94, 66);
  ellipse(3*(windowWidth - (windowWidth/8) - 50)/4, windowHeight/2, size3, size3);
  viola_amp.smooth();

  let level_cello = cello_amp.getLevel();
  let size4 = map(level_cello, 0, 1, 50, 500);
  fill(85, 55, 57);
  ellipse(windowWidth - (windowWidth/8) - 50, windowHeight/2, size4, size4);
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