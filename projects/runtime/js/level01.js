var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function (game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1,
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 500, "y": groundY },
                { "type": "sawblade", "x": 200, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
            ]
        };
        for (var i = 0; i < levelData.gameItems.length; i++) {
            if (levelData.gameItems[i].type === "jacob") {
                createJacob(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }

            else if (levelData.gameItems[i].type === "reward") {
                createReward(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }

            else if (levelData.gameItems[i].type === "reward2") {
                createReward2(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }

            else if (levelData.gameItems[i].type === "sawblade") {
                createSawBlade(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }

            else if (levelData.gameItems[i].type === "custom") {
                createMyObstacle(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }
        }
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
            var obstacleImage = draw.bitmap('img/sawblade.png');
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
        createSawBlade(500, 330);
        createSawBlade(800, 220);
        createSawBlade(1200, 330);

        function createJacob(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var raccoonHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            raccoonHitZone.x = x;
            raccoonHitZone.y = y;
            game.addGameItem(raccoonHitZone);
            var obstacleImage = draw.bitmap('img/yum.png');
            raccoonHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
        createJacob(1600, 325);

        function createEnemy(x, y) {
            var enemy = game.createGameItem('enemy', 50);
            var redSquare = draw.bitmap('img/ianyum.png');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = y;
            enemy.velocityX = -1;
            game.addGameItem(enemy);


            enemy.onPlayerCollision = function () {
                console.log('IVE BEEN SHOT');
                game.changeIntegrity(-10);
            };
            enemy.onProjectileCollision = function () {
                console.log('PLAYER DOWN');
                game.increaseScore(1);
                enemy.shrink();

            }
        }
        createEnemy(400, groundY - 36);
        createEnemy(800, groundY - 45);
        createEnemy(1200, groundY - 59);

        function createReward(x, y) {
            function reward(x, y) {
                var reward = game.createGameItem('reward', 10);
                var alexYum = draw.bitmap('img/joaquinyum.png');
                alexYum.x = -50;
                alexYum.y = -50;
                reward.addChild(alexYum);

                alexYum.scaleX = 0.2;
                alexYum.scaleY = 0.2;

                reward.x = x;
                reward.y = y;

                game.addGameItem(reward);
                reward.velocityX = -2;

                reward.onPlayerCollision = function () {
                    console.log('You collected the rare RACCOON COIN!!');
                    game.changeIntegrity(+25);
                    reward.fadeOut();

                };
                reward.onProjectileCollision = function () {
                    console.log('You collected the rare RACCOON COIN!!');
                    game.increaseScore(100);
                    reward.fadeOut();
                }
            }
            reward(1600, groundY - 50);

        }
        createReward();






        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
