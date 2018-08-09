const PIXI = require("pixi.js");

var app = new PIXI.Application(400, 300, {backgroundColor : 0x1099bb});
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
}

function right() {
 logo.x += logo.vx;
}

gameLoop();
