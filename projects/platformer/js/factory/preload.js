(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    
    // TODO : Load config for url //
    opspark.preload = function (game) {
        game.load.image('cannon', './asset/cannon.png');
        game.load.image('projectile', './asset/projectile.gif');
        game.load.image('platform', './asset/platform.png');
        game.load.image('db', './asset/collectable/database.png');
        game.load.image('robotnik', './asset/collectable/robotnik.png');
        game.load.image('grace', './asset/collectable/yum.png');
        game.load.image('kennedi', './asset/collectable/ianyum.png');
        game.load.image('max', './asset/collectable/max-head.png');
        game.load.atlas('halle', './asset/halle/phaser-json-array/halle.png', './asset/halle/phaser-json-array/halle.json');
    };
})(window);
