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

logo.vx = 0.1;
logo.vy = 0.1;
logo.accelerationX = 0;
logo.accelerationY = 0.98;
logo.frictionX = logo.frictionY = 0.1;

// Acceleation and friction
logo.vx = logo.vx + logo.accelerationX;
logo.vy = logo.vy + logo.accelerationY;
logo.vx = logo.vx * logo.frictionX;
logo.vy = logo.vx * logo.frictionY;

// Add gravity
logo.vy = logo.vy + 0.1;

function gameLoop(){
   //Loop this function 60 times per second
  requestAnimationFrame(gameLoop);
  logo.x = logo.x + logo.vx;
  logo.y = logo.y + logo.vy;
   app.renderer.render(app.stage);
}

gameLoop();
