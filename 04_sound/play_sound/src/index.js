const PIXI = require("pixi.js");

let app = new PIXI.Application(600, 400, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

const sound = PIXI.sound.Sound.from('assets/sounds/smb_coin.mp3');
sound.play();


PIXI.sound.Sound.from({
    url: 'assets/sounds/smb_jump-small.mp3',
    autoPlay: true,
    complete: function() {
        console.log('Sound finished');
    }
});

PIXI.sound.add('coin', 'assets/sounds/smb_powerup.mp3');
PIXI.sound.play('coin');
