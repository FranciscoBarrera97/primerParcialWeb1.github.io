
let symmetry = 6;
let angle = 360 / symmetry;
let currentColor; 
let currentWeight = 2; 
let canvasWidth = 720; 
let canvasHeight = 400; 

function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('canvas-container');
  angleMode(DEGREES);
  colorMode(RGB, 255);
  background(0);

  createColorButton('VERDE', color(57, 255, 20), 'controls');
  createColorButton('ROSA', color(255, 20, 147), 'controls');
  createColorButton('CELESTE', color(0, 255, 255), 'controls');
  createColorButton('BLANCO', color(255, 255, 255), 'controls');
  createColorButton('AMARILLO', color(255, 255, 51), 'controls');
  currentColor = color(255, 255, 255);

  createWeightButton('FINO', 2, 'controls');
  createWeightButton('GRUESO', 6, 'controls');
  currentWeight = 2;

  
  createResetButton('RESET', 'reset-button-container');
}

function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let lineStartX = mouseX - width / 2;
    let lineStartY = mouseY - height / 2;
    let lineEndX = pmouseX - width / 2;
    let lineEndY = pmouseY - height / 2;

    if (mouseIsPressed === true) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        stroke(currentColor);
        strokeWeight(currentWeight);
        line(lineStartX, lineStartY, lineEndX, lineEndY);

        push();
        scale(1, -1);
        line(lineStartX, lineStartY, lineEndX, lineEndY);
        pop();
      }
    }
  }
}

function createColorButton(label, col, parentId) {
  let btn = createButton(label);
  btn.style('background-color', col.toString());
  btn.style('color', 'black');
  btn.style('margin', '5px');
  btn.mousePressed(() => {
    currentColor = col;
  });
  if (parentId) {
    btn.parent(parentId);
  }
  return btn;
}

function createWeightButton(label, weight, parentId) {
  let btn = createButton(label);
  btn.style('margin', '5px');
  btn.mousePressed(() => {
    currentWeight = weight;
  });
  if (parentId) {
    btn.parent(parentId);
  }
  return btn;
}

function createResetButton(label, parentId) {
  let btn = createButton(label);
  btn.style('margin', '5px');
  btn.mousePressed(() => {
    background(0); 
  });
  if (parentId) {
    btn.parent(parentId);
  }
  return btn;
}
