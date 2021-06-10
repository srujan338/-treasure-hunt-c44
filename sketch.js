var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage('treasure.jpg');
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  // Add code to display score in the middle of the screen
  fill(255);
  textSize(20);
  text('Score: '+score,450,250);

  // Add code to display the end screen
  if(score === 3){
    clear();
    background(bg2);
    fill(0);
    textSize(40);
    text('TREASURE UNLOCKED',250,200);
  }
  drawSprites()
}