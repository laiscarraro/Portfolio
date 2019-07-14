function setup() {
  var wave = new p5.Oscillator();
  wave.setType('triangle');
  wave.start();
  wave.amp(0.5, 0.5);
  wave.freq(240);
  wave.start(1);
  wave.freq(460);
}