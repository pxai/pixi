const PIXI = require("pixi.js");
const gameCanvas = document.getElementById("game");

let width = window.innerWidth;
let height = window.innerHeight;

const renderer = new PIXI.Renderer({
    view: gameCanvas,
    width,
    height,
    backgroundColor : 0,
    resolution: window.devicePixelRatio, // for mobile
    autoDensity: true
});

window.addEventListener("resize", resize);
function resize () {
    width = window.innerWidht;
    height = window.innerHeight;

    renderer.resize(width, height);
}

const stage = new PIXI.Container();

var basicText = new PIXI.Text('Hello Pixi fullscreen');


basicText.anchor.x = 0.5;
basicText.anchor.y = 0.5;
basicText.style.fill = "red";
stage.addChild(basicText);

const ticker = new PIXI.Ticker();
ticker.add(animation);
ticker.start(); // it starts on its own.

function animation () {
    basicText.x = renderer.screen.width / 2;
    basicText.y = renderer.screen.height / 2;
    basicText.rotation += 0.1;
    renderer.render(stage);
}
