const PIXI = require("pixi.js");
const gameCanvas = document.getElementById("game");
var app = new PIXI.Application({
    view: gameCanvas,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor : 0
});
document.body.appendChild(app.view);

var basicText = new PIXI.Text('Hello Pixi fullscreen');

basicText.x = app.screen.width / 2;
basicText.y = app.screen.height / 2;
basicText.anchor.x = 0.5;
basicText.anchor.y = 0.5;
basicText.style.fill = "red";

app.stage.addChild(basicText);
