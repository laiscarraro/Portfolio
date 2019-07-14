function setup() {
  var wave = new p5.Oscillator();
  wave.start();
  wave.amp(0.5);
  wave.freq(440);
}