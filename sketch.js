let teapot;
let prices;
let first;
let alt_text;
function preload() {
  // Load model with normalise parameter set to true
  hoodie = loadModel("dress-fix.obj", true);
  prices = loadImage("unnamed (1).jpg");
  alt_texture = loadImage("price.jpg");
  top = loadModel("tird.obj", true);
  first = loadImage("unnamed.jpg");
  alt_tex = loadImage("alt.jpg");
}

function setup() {
  createCanvas(1540, 800, WEBGL);
}

function draw() {
  background(0);
  directionalLight(200, 200, 200, mouseX, mouseY, 1);
  ambientLight(255);
 // translate(150, 150, 150);
 translate(-60 * 3, -30, 200);
  push();
  
  fill(244);

  
  noStroke();
  scale(2); // Scaled to make model fit into canvas
  rotateX(60);
  rotateY(mouseX / -100);
  rotateZ(mouseY / 1000);
  texture(prices);
 
  
  if (mouseIsPressed) {
    texture(alt_texture); //change texture
  }
  //normalMaterial(); // For effect
  model(hoodie);
  pop(); 
  //translate(150, -200, 150);
  //translate(360, -10, 200);
  translate(350, -30, -100);
  push();
  
  fill(244);

  
  noStroke();
  scale(2); // Scaled to make model fit into canvas
  rotateX(60);
  rotateY(mouseX / -100);
  rotateZ(mouseY / 1000);
  texture(first);
 
  
  if (mouseIsPressed) {
  //add random
    window.location.replace('http://127.0.0.1:5501/Uni/Part3/choice.html');
    texture(alt_tex); //change texture
  }
  //normalMaterial(); // For effect
  model(hoodie);
  pop(); 

}
