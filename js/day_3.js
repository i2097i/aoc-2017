function day3() {
  var xPos = 0;
  var yPos = 0;
  var xAccel = 1;
  var yAccel = 0;

  var xBounds = 1;
  var yBounds = 0;

  var value = 1;

  // mapping is massive object key'd in the format of {xy: {value: v, x: xPos, y: yPos}}
  var mapping = {};
  while(value <= day3_input) {
    if (value == day3_input) {
      console.log([value, xPos, yPos, (Math.abs(xPos) + Math.abs(yPos))]);
      $('#day-3').html("<strong>Part 1:</strong> " + (Math.abs(xPos) + Math.abs(yPos)) + " steps" + "</br><strong>Part 2:</strong> " + "");
    }
    mapping[xPos.toString() + yPos.toString()] = {
      value: value,
      x: xPos,
      y: yPos
    };

    value++;

    // Change Direction
    if (Math.abs(xPos) == xBounds && Math.abs(yPos) == yBounds) {
      if (xAccel != 0) {
        // We were moving on x
        // Need to move up or down
        if (xPos > 0) {
          // x bounds met right
          // increase y bounds and set y accel to 1
          yBounds++;
          yAccel = 1;
        } else if (xPos < 0) {
          // x bounds met right
          // set y accel to -1
          yAccel = -1;
        }
        xAccel = 0;
      } else {
        // We were moving on y
        // Need to move up or down
        if (yPos > 0) {
          // y bounds met top
          // set x accel to -1
          xAccel = -1;
        } else if (yPos < 0) {
          // y bounds met bottom
          // increase x bounds and set x accel to 1 
          xBounds++;
          xAccel = 1;
        }
        yAccel = 0;
      }
    }

    // Move xPos
    if (xAccel > 0) {
      // Moving right
      xPos++;
    } else if (xAccel < 0) {
      // Moving left
      xPos--;
    }

    // Move yPos
    if (yAccel > 0) {
      // Moving up
      yPos++;
    } else if (yAccel < 0) {
      // Moving down
      yPos--;
    }
  }
}