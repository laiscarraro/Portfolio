var osc;

function setup() {
  var osc = new p5.Oscillator();
  osc.setType('triangle');
  osc.amp(0);
  playNote(240, 2);
  playNote(440, 1);
}

function playNote(note, duration) {
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