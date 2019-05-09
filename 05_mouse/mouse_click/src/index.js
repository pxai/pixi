const PIXI = require("pixi.js");

var app = new PIXI.Application(400, 300, {backgroundColor : 0x00dead});
document.body.appendChild(app.view);

var basicText = new PIXI.Text('Hello Pixi mouse click');

basicText.x = app.screen.width / 4;
basicText.y = app.screen.height / 3;

app.stage.addChild(basicText);

// Opt-in to interactivity
basicText.interactive = true;

// Shows hand cursor
basicText.buttonMode = true;

// Pointers normalize touch and mouse
basicText.on('pointerdown', onClick);

// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only
// sprite.on('tap', onClick); // touch-only

function onClick (event) {
    console.log("clicked ", event);
    basicText.scale.x *= 1.25;
    basicText.scale.y *= 1.25;
}
