const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;
var font;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  font = loadFont('assets/PlayfairDisplay-VariableFont_wght.ttf');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 500, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(275, playerBase.position.y-140, 50, 180, options);
  World.add(world, player);
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  image(baseimage, playerBase.position.x, playerBase.position.y, 180, 150);
  image(playerimage, player.position.x, player.position.y, 50, 180);

  // Title
  fill("#FFFF");
  textAlign("center");
  textFont(font);
  textSize(80);
  text("ARQUEIRO ÉPICO", width/2, 150);
}
