const PIXI = require("pixi.js");

var app = new PIXI.Application(400, 300, {backgroundColor : 0x000000});
document.body.appendChild(app.view);

var basicText = new PIXI.Text('Hello Pixi with basic text');

basicText.x = app.screen.width / 2;
basicText.y = app.screen.height / 2;

app.stage.addChild(basicText);
