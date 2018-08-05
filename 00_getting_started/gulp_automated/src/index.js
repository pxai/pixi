
const PIXI = require("pixi.js");
const type = PIXI.utils.isWebGLSupported() ? "WebGL" : "canvas";
PIXI.utils.sayHello(type)

//Create a Pixi Application (canvas)
let app = new PIXI.Application({width: 256, height: 256});

//Add the canvas that Pixi automatically created for you to the HTML document
window.document.body.appendChild(app.view);
