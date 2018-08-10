const PIXI = require("pixi.js");

var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

// create a new Sprite from an image path
const logo = PIXI.Sprite.from("assets/images/pixilogo.png");

// center the sprite's anchor point
logo.anchor.set(0.5);

// move the sprite to the center of the screen
logo.x = app.screen.width / 2;
logo.y = app.screen.height / 2;

app.stage.addChild(logo);
    console.log(logo);

let state = init;

function gameLoop(){
   //Loop this function 60 times per second
 requestAnimationFrame(gameLoop);
 state();
 app.renderer.render(app.stage);
}

function init() {
  logo.vx = 1;
  logo.vy = 1;
  state = right;
  console.log('Game init')
}

function right() {
// logo.x += logo.vx;
}

gameLoop();


function setup() {

    //Create the `logo` sprite
    logo = new Sprite(resources["images/logo96x48.png"].texture);

    //Center the sprite
    logo.x = renderer.view.width / 2 - logo.width / 2;
    logo.y = renderer.view.height / 2 - logo.height / 2;

    //Initialize the sprites's velocity variables
    logo.vx = 0;
    logo.vy = 0;

    //Add the sprite to the stage
    stage.addChild(logo);

    //Capture the keyboard arrow keys
    var left = keyboard(37),
    up = keyboard(38),
    right = keyboard(39),
    down = keyboard(40);

    //Left arrow key `press` method
    left.press = () => {
        //Change the sprite's velocity when the key is pressed
        logo.vx = -5;
        logo.vy = 0;
    };

//Left arrow key `release` method
    left.release = () => {

    //If the left arrow has been released, and the right arrow isn't down,
    //and the logo isn't moving vertically, stop the sprite from moving
    //by setting its velocity to zero
        if (!right.isDown && logo.vy === 0) {
            logo.vx = 0;
        }
    };

    //Up
    up.press = () => {
        logo.vy = -5;
        logo.vx = 0;
    };

    up.release = () => {
        if (!down.isDown && logo.vx === 0) {
        logo.vy = 0;
        }
    };

    //Right
    right.press = () => {
        logo.vx = 5;
        logo.vy = 0;
    };

    right.release = () => {
        if (!left.isDown && logo.vy === 0) {
            logo.vx = 0;
        }
    };

    //Down
    down.press = () => {
        logo.vy = 5;
        logo.vx = 0;
    };

    down.release = () => {
        if (!up.isDown && logo.vx === 0) {
            logo.vy = 0;
        }
    };

    //Set the game's current state to `play`
    state = play;

    //Start the game loop
    gameLoop();
}


function keyboard(keyCode) {
    let key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;

    //The `downHandler`
    key.downHandler = event => {
        if (event.keyCode === key.code) {
            if (key.isUp && key.press) key.press();
            key.isDown = true;
            key.isUp = false;
        }
    event.preventDefault();
    };
    //The `upHandler`
    key.upHandler = event => {
    if (event.keyCode === key.code) {
    if (key.isDown && key.release) key.release();
    key.isDown = false;
    key.isUp = true;
    }

    event.preventDefault();
    };

    //Attach event listeners
    window.addEventListener(
    "keydown", key.downHandler.bind(key), false
    );

    window.addEventListener(
    "keyup", key.upHandler.bind(key), false
    );

    //Return the `key` object
    return key;
}

function play() {
    //Apply the velocity values to the sprite's position to make it move
    logo.x += logo.vx;
    logo.y += logo.vy;
}
