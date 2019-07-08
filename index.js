var canvas;
/*
a global variable for the color palette.
it goes from the lighter to the darker color.
the numers represent the rgb coordinates.
*/
var palette = [
  [208, 221, 215],
  [165, 174, 158],
  [126, 132, 107],
  [89, 78, 54],
  [47, 37, 4]
];

var menu;

function setup() {
  menu = createMenu(["Genetic Algorithm", "sla", "aaaaa"], ["geneticAlgorithm.html", "sla.html", "aaaaa.html"]);
}

function draw() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(palette[0][0], palette[0][1], palette[0][2]);

  fill(palette[3][0], palette[3][1], palette[3][2]);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Portfolio", 0, 20, windowWidth, 50);
  
  displayMenu(menu);
  
}

function createMenuButton(message, link) {
  //creating the DOM element with p5.js function
  var btn = createButton(message, link);
  
  //changing the style of the button:
  btn.style('background-color', color(palette[1][0], palette[1][1], palette[1][2]));
  btn.style('border', 'none');
  btn.style('border-radius', '8px');
  btn.style('padding', '10px');
  
  //text style
  btn.style('color', color(palette[2][0], palette[2][1], palette[2][2]));
  btn.style('font-size', '22');
  
  
  //returning styled button
  return btn;
}

function displayMenuButton(button, y) {
  if(windowWidth < 800) {
    button.position(0, y);
    button.style('width', windowWidth + 'px');
  } else {
    button.position(- 150 + windowWidth/2, y);
    button.style('width', '300px');
  }
  
  var mouseOver = function() {
    button.style('background-color', color(color(palette[3][0], palette[3][1], palette[3][2])));
    button.style('color', color(color(palette[0][0], palette[0][1], palette[0][2])));
  };
  
  var mouseOut = function() {
    button.style('background-color', color(palette[1][0], palette[1][1], palette[1][2]));
    button.style('color', color(palette[2][0], palette[2][1], palette[2][2]));
  };
  
  var mouseClicked = function() {
    button.style('background-color', color(palette[4][0], palette[4][1], palette[4][2]));
    window.location.href = button.value();
  };
  
  button.mouseOver(mouseOver);
  button.mouseOut(mouseOut);
  button.mouseClicked(mouseClicked);
}

function createMenu(names, links) {
  menu = [];
  for(var i = 0; i < names.length; i++) {
    menu.push(createMenuButton(names[i], links[i]));
  }
  return menu;
}

function displayMenu(menu) {
  for(var i = 0; i < menu.length; i++) {
    displayMenuButton(menu[i], 100 + 60*i);
  }
}