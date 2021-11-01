(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     *
     * GOAL: Add at least 3 cannons to make your level challenging. 
     * 
     * Use the createCannon Function to create cannons for the level. 
     * 
     * createCannon() takes these arguments:
     *      
     *      createCannon(type, position, delay);
     * 
     *      type: "top", "bottom", "left", or "right"
     *      position: The position of the cannon along whichever side the cannon is placed on
     *          - the x coordinate for "top" and "bottom" cannons
     *          - the y coordinate for "left" and "right" cannons
     *      delay: OPTIONAL the number of milliseconds to wait before firing the first projectile
     */ 
    function init(game) {
        let createCannon = cannon.create;
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        createCannon("top", 370);
        createCannon("top", 520);
        createCannon("bottom", 465);
        createCannon("bottom", 415);
        createCannon("top", 25);
        createCannon("top", 875);
        createCannon("bottom", 875);
        createCannon("bottom", 25);
        createCannon("top", 120);
        createCannon("top", 170);
        createCannon("top", 220);
        createCannon("top", 670);
        createCannon("top", 720);
        createCannon("top", 770);
        createCannon("bottom", 120);
        createCannon("bottom", 170);
        createCannon("bottom", 220);
        createCannon("bottom", 670);
        createCannon("bottom", 720);
        createCannon("bottom", 770);
        createCannon("left", 150);
        createCannon("left", 250);
        createCannon("left", 350);
        createCannon("left", 450);
        createCannon("right",150);
        createCannon("right",250);
        createCannon("right",350);
        createCannon("right",450);
        createCannon("left",550);
        createCannon("right",550);
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    cannon.init = init;
})(window);
