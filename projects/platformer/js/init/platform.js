(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE

        // example:
        createPlatform(400, 100, 0.2);
        createPlatform(350, 250, 0.1);
        createPlatform(500, 250, 0.1);
        createPlatform(400, 400, 0.2);
        createPlatform(350, 0, 0.009, 17.5);
        createPlatform(538, 0, 0.009, 17.5);
        createPlatform(350, 530, 0.1);
        createPlatform(500, 530, 0.1);
        createPlatform(300, 100, 0.125);
        createPlatform(541, 100, 0.125);
        createPlatform(50, 550, 0.1);
        createPlatform(800, 550, 0.1);
        createPlatform(50, 350, 0.1);
        createPlatform(800, 350, 0.1);
        createPlatform(50, 150, 0.1);
        createPlatform(800, 150, 0.1);
        createPlatform(250, 450, 0.1);
        createPlatform(600, 450, 0.1);
        createPlatform(250, 250, 0.1);
        createPlatform(600, 250, 0.1);


        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);