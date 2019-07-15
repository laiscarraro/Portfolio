var target;
var popmax;
var mutationRate;
var population;

var osc;
var notes = [64, 62, 60, 62, 64, 64, 64];
var index = 0;

function setup() {
  createCanvas(640, 360);
  target = [64, 62, 60, 62, 64, 64, 64];
  popmax = 100;
  mutationRate = 0.01;

  // Create a populationation with a target phrase, mutation rate, and populationation max
  population = new Population(target, mutationRate, popmax);

  osc = new p5.Oscillator('triangle');
  osc.start();
  osc.amp(0);
  frameRate(2);
}

function draw() {
	background(255);
	fill(0);
	text("Target:  64  62  60  62  64  64  64", 100, 100);
	text("Current: ", 100, 130);
	for(var k = 0; k < notes.length; k++) {
		text(notes[k], 150 + k*20, 130);
	}
	if(index <= notes.length) {
		playNote(midiToFreq(notes[index]), 2);
		index = index + 1;
	} else {
		index = 0;
		population.naturalSelection();
		population.generate();
		population.calcFitness();
		notes = population.getBest();
	}

	if(population.finished) {
		noLoop();
	}
}

function playNote(note, duration) {
  osc.freq(note);
  // Fade it in
  osc.fade(0.5, 0.2);

  // If we sest a duration, fade it out
  if (duration) {
    setTimeout(function() {
      osc.fade(0, 0.3);
    }, duration-50);
  }
}

class Population {
/*
  float mutationRate;           
  DNA[] population = [];          
  ArrayList<DNA> matingPool;  
  String target;               
  int generations;             
  boolean finished;             
  int perfectScore;
*/

  constructor(notes, m, size) {
  	this.population = [];
  	this.matingPool = [];
    this.target = notes;
    this.mutationRate = m;
    for (var i = 0; i < size; i++) {
      this.population.push(new DNA(this.target.length));
    }
    this.calcFitness();
    this.finished = false;
    this.generations = 0;
    this.perfectScore = 1;
  }

  calcFitness() {
    for (var i = 0; i < this.population.length; i++) {
      this.population[i].fitness(this.target);
    }
  }

  naturalSelection() {
    this.matingPool = [];

    var maxFitness = 0;

    for (var i = 0; i < this.population.length; i++) {
      if (this.population[i].fitnessScore > maxFitness) {
        maxFitness = this.population[i].fitnessScore;
        console.log(maxFitness);
      }
    }

    for (var i = 0; i < this.population.length; i++) {
      var fit = map(this.population[i].fitnessScore, 0, maxFitness, 0, 1);
      var n = fit * 100;
      for (var j = 0; j < n; j++) {           
        this.matingPool.push(this.population[i]);
      }
    }
  }

  generate() {
    for (var i = 0; i < this.population.length; i++) {
      var a = int(random(0, this.matingPool.length));
      var b = int(random(0, this.matingPool.length));
      var partnerA = this.matingPool[a];
      var partnerB = this.matingPool[b];
      var child = partnerA.crossover(partnerB);
      child.mutate(this.mutationRate);
      this.population[i] = child;
    }
    this.generations++;
  }

  getBest() {
    var worldrecord = 0;
    var index = 0;
    for (var i = 0; i < this.population.length; i++) {
      if (this.population[i].fitnessScore > worldrecord) {
        index = i;
        worldrecord = this.population[i].fitnessScore;
      }
    }
    
    if (worldrecord == this.perfectScore) {
    	this.finished = true;
    }
    return this.population[index].getPhrase();
  }

  finished() {
    return finished;
  }

  getGenerations() {
    return generations;
  }

  getAverageFitness() {
    var total = 0;
    for (var i = 0; i < this.population.length; i++) {
      total += this.population[i].fitnessScore;
    }
    return total/(this.population.length);
  }
}


class DNA {

  /*
  char[] genes;
  
  float fitness;
  */
  
  constructor(size) {
  	this.fitnessScore = 0;
    this.genes = [];
    for (var i = 0; i < size; i++) {
      this.genes.push(int(random(30, 81)));
    }
  }
  
  getPhrase() {
    return this.genes;
  }
  
  fitness(target) {
     var score = 0;
     for (var i = 0; i < this.genes.length; i++) {
        if(this.genes[i] == target[i]) {
        	score += 1;
        }
     }
     this.fitnessScore = score/target.length;
  }
  
  crossover(partner) {
    // A new child
    var child = new DNA(this.genes.length);
    
    var midpoint = int(random(this.genes.length));
    
    for (var i = 0; i < this.genes.length; i++) {
      if (i > midpoint) {
      	child.genes[i] = this.genes[i];
      } else {
      	child.genes[i] = partner.genes[i];
      }
    }
    return child;
  }
  
  mutate(mutationRate) {
    for (var i = 0; i < this.genes.length; i++) {
      if (random(1) < mutationRate) {
        this.genes[i] = int(random(30, 81));
      }
    }
  }
}