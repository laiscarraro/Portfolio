var wave;

function setup() {
  var wave = new p5.Oscillator();
  wave.setType('triangle');
  wave.amp(0.5);
  playNote(240, 2, wave);
  playNote(440, 1, wave);
}

function playNote(note, duration, osc) {
  osc.freq(note);
  
  // Fade it in
  osc.fade(0.5,0.2);

  // If we sest a duration, fade it out
  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}
