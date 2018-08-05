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

// Listen for animate update
app.ticker.add(function(delta) {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    logo.rotation += 0.1 * delta;

});

/*const type = PIXI.utils.isWebGLSupported() ? "WebGL" : "canvas";
PIXI.utils.sayHello(type)

//Create a Pixi Application (canvas)
let app = new PIXI.Application({width: 256, height: 256});

//Add the canvas that Pixi automatically created for you to the HTML document
window.document.body.appendChild(app.view);

const texture = PIXI.utils.TextureCache["../resources/images/pixilogo.png"];
const logo = new PIXI.Sprite(texture);

PIXI.loader
    .add("../resources/images/pixilogo.png")
    .load(setup);

function setup () {
  let texture = PIXI.loader.resources["../resources/images/pixilogo.png"].texture;
  let casco = new PIXI.Sprite(texture);
}
*/
