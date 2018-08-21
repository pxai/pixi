const PIXI = require("pixi.js");

var app = new PIXI.Application(400, 300, {backgroundColor : 0x00dead});
document.body.appendChild(app.view);

var basicText = new PIXI.Text('Hello Pixi mouse click');

basicText.x = app.screen.width / 4;
basicText.y = app.screen.height / 3;

app.stage.addChild(basicText);
