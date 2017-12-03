function day1() {

  var numbers = day1_input;
  var numberArray = numbers.split("");
  var firstResult = 0;
  var secondResult = 0;
  var previousValue = numberArray[numberArray.length - 1];
  var step = numberArray.length / 2;

  _.each(numberArray, function(currentValue, i) {
    var stepValueIndex = step + i;
    if (currentValue == previousValue) {
      // Then the two digits match - add to sum
      firstResult += parseInt(currentValue);
    }

    if (stepValueIndex >= numberArray.length) {
      stepValueIndex = stepValueIndex - numberArray.length;
    }

    if (currentValue == numberArray[stepValueIndex]) {
      // Then the two digits match - add to sum
      secondResult += parseInt(currentValue);
    }

    previousValue = currentValue;
  });

  $('#day-1').html("<strong>Part 1:</strong> " + firstResult + "</br><strong>Part 2:</strong> " + secondResult);
}