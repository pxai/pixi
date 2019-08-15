const PIXI = require("pixi.js");

const gameCanvas = document.getElementById("game");

let width = window.innerWidth;
let height = window.innerHeight;

let app = new PIXI.Application({
    view: gameCanvas,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor : 0
});
document.body.appendChild(app.view);

window.addEventListener("resize", resize);
function resize () {
    width = window.innerWidth;
    height = window.innerHeight;
    app.renderer.resize(width, height);
    console.log("resize the whole thing :", width, height);
}

linkFont('assets/fonts/','joystix');

const moco = PIXI.Sprite.from("assets/images/mocomplate0.png");

// center the sprite's anchor point
moco.anchor.set(0.5);

// move the sprite to the center of the screen
moco.x = app.screen.width / 2;
moco.y = app.screen.height / 2;
moco.scale.set(10,10);
moco.interactive = true;

// Shows hand cursor
moco.buttonMode = true;
moco.on('pointerdown', function (event) {
    console.log("MOCO!!", event);
});

app.stage.addChild(moco);

const style = new PIXI.TextStyle({
    fontFamily: 'joystix',
    fontSize: 64,
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#000',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#333',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6
});

const richText = new PIXI.Text('Whack a Moco!!', style);
richText.x = 5;
richText.y = 5;

app.stage.addChild(richText)

const ticker = new PIXI.Ticker();

ticker.start();

function linkFont(path, fontFamily) {
    let newStyle = document.createElement("style");
    let fontFace = "@font-face {font-family: '" + fontFamily + "';\n"
                    + "src: url('" + path  + fontFamily +".woff'),\n"
                    +"      url('" + path  + fontFamily +".woff2'),\n"
                    +"      url('" + path  + fontFamily +".svg'),\n"
                    +"      url('" + path  + fontFamily +".eot'),\n"
                    +"      url('" + path  + fontFamily +".ttf');\n"
                    +"\n}";

    newStyle.appendChild(document.createTextNode(fontFace));
    console.log(path, fontFamily)
    document.head.appendChild(newStyle);
}