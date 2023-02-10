/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE; //60 frames per second
  var BOARD_WIDTH = $("#board").width(); //its the maximum X-coordinate on screen
  var BOARD_HEIGHT = $(window).height();
  var KEY = {
    "LEFT": 37,
    "RIGHT": 39,
    "UP": 38,
    "DOWN": 40
  }

  var positionX = 0;
  var positionY = 0;
  var speedX = 0;
  var speedY = 0;

  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    //updates gametime position
    // checks for collision
    repositionBox();

  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    //press up key to move the box in -Y direction
    //press down key to move the box in +Y direction
    //press left for -X and right for +X
    //console.log(event.which); //shows which key triggered even
    changeSpeedX(-5, event.which, KEY.LEFT);
    changeSpeedX(5, event.which, KEY.RIGHT);
    changeSpeedY(-5, event.which, KEY.UP);
    changeSpeedY(5, event.which, KEY.DOWN);
    //okay so basically this moves the box using helper functions
  }
  function handleKeyUp(event) {
    changeSpeedX(0, event.which, KEY.LEFT);
    changeSpeedX(0, event.which, KEY.RIGHT);
    changeSpeedY(0, event.which, KEY.UP);
    changeSpeedY(0, event.which, KEY.DOWN);
    //okay so basically this stops the box from moving using helper functions
  }


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionBox() {
    //changes X location
    positionX += speedX; //updates the X value
    $("#walker").css("left", positionX); //redraws the box to new X value
    //changes Y location
    positionY += speedY;  //updates the Y value
    $("#walker").css("top", positionY); //redraws the box to new Y value
  }

  function changeSpeedX(newSpeed, keycode, arrowKey) {
    if (keycode === arrowKey) {
      speedX = newSpeed;
    }
  }

  function changeSpeedY(newSpeed, keycode, arrowKey) {
    if (keycode === arrowKey) {
      speedY = newSpeed;
    }
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}
