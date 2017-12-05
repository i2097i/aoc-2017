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
  var part1Result = null;
  var part2Result = null;
  while(!part1Result || !part2Result) {
    if (part1Result == null && value == day3_input) {
      part1Result = (Math.abs(xPos) + Math.abs(yPos));
    }

    // Stop building mapper once we have part2Result
    if (!part2Result) {
      // Calculate part 2 value
      var part2Sum = 0;
      if (Object.keys(mapping).length < 2) {
        part2Sum = 1;
      } else {
        _.each([yPos + 1, yPos, yPos - 1], function(y) {
          _.each([xPos - 1, xPos, xPos + 1], function(x) {
            // (x-1,y+1) (x,y+1) (x+1,y+1)
            // (x-1,y)   (x,y)   (x+1,y)
            // (x-1,y-1) (x,y-1) (x+1,y-1)
            
            var entry = mapping[x.toString() + y.toString()];
            if (entry) {
              part2Sum += entry.value;
            }
          });
        });
      }

      mapping[xPos.toString() + yPos.toString()] = {
        value: part2Sum,
        x: xPos,
        y: yPos
      };

      if (part2Sum > day3_input) {
        part2Result = part2Sum;
      }
    } else if (mapping) {
      mapping = null;
    }

    if (part1Result && part2Result) {
      appendToDiv(3, part1Result, part2Result);
    }

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