//---- GLOBAL VARIABLES ----//
let game: Game;

let outrunFont: any;
let pixelFont: any;

let shootSound: p5.SoundFile;
let backgroundSound: p5.SoundFile;
let fatality: p5.SoundFile;
let title: p5.SoundFile;
let killSound: p5.SoundFile;
let heart: p5.SoundFile;
let oh: p5.SoundFile;

let unmute: p5.Image;
let mute: p5.Image;

let prototypeAsset: p5.Image;
let prototypeDeathAsset: p5.Image;

let droneAsset: p5.Image;
let droneDeathAsset: p5.Image;
let runnerAsset: p5.Image;
let platformAsset: p5.Image;
let powerupLifeAsset: p5.Image;
let lifeAsset: p5.Image;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  // Tyvärr har jag inte fått till den globala typningen för
  // inladdningen av ljud men fungerar bra enligt nedan..
  // sound = (window as any).loadSound('../assets/mySound.wav');

  outrunFont = loadFont("./assets/fonts/Outrun_future.otf");
  pixelFont = loadFont("./assets/fonts/PressStart2P-Regular.ttf");

  // Thanks to https://oco.itch.io/cyberpunk-character-pack for art

  runnerAsset = loadImage("./assets/sprites/runner.gif");
  prototypeAsset = loadImage("./assets/sprites/prototype.gif");
  prototypeDeathAsset = loadImage("./assets/sprites/prototypeDeath.gif");
  droneAsset = loadImage("./assets/sprites/drone.gif");
  droneDeathAsset = loadImage("./assets/sprites/droneDeath.gif");

  // https://trixelized.itch.io/starstring-fields

  platformAsset = loadImage("./assets/imgs/platform.png");

  shootSound = loadSound("./assets/sound/shoot-sound.wav");
  backgroundSound = loadSound("./assets/sound/background-sound.wav");
  fatality = loadSound("./assets/sound/fatality.wav");
  title = loadSound("./assets/sound/title.wav");
  killSound = loadSound("./assets/sound/kill.wav");
  heart = loadSound("./assets/sound/heart.wav");
  oh = loadSound("./assets/sound/oh2.wav");

  unmute = loadImage("./assets/imgs/unmute.png");
  mute = loadImage("./assets/imgs/mute.png");

  // https://www.artstation.com/thebyteman
  powerupLifeAsset = loadImage("./assets/sprites/heart.gif");

  lifeAsset = loadImage("./assets/imgs/heart.png");
}
/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
  createCanvas(800, 600); // bestäm storlek
  frameRate(60);

  game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  game.update();
  game.draw();
  // console.log(game.menu.menuState)
}
function mousePressed() {
  (window as any).userStartAudio();
}

/**
   * Built in windowResize listener function in P5

  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);}
   */
