const PIXI = require("pixi.js");

var app = new PIXI.Application(600, 400, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);


var style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440
});

var richText = new PIXI.Text('Pixi rich text sample', style);
richText.x = 5;
richText.y = 5;

app.stage.addChild(richText);
