const PIXI = require("pixi.js");

let app = new PIXI.Application(600, 400, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);
linkFont('assets/fonts/', 'Supercell-Magic');
//linkFont("assets/fonts/Supercell-Magic.woff2");

const style = new PIXI.TextStyle({
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

const richText = new PIXI.Text('Pixi rich text sample', style);
richText.x = 5;
richText.y = 5;

app.stage.addChild(richText);

const otherStyle = new PIXI.TextStyle({
    fontFamily: 'Supercell-Magic',
    fontSize: 36,
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#000',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#333',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440
});

const otherRichText = new PIXI.Text('Other Rich Text', otherStyle);
otherRichText.x = 60;
otherRichText.y = 60;

app.stage.addChild(otherRichText);

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
