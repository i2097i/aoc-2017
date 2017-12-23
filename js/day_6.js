function day6() {
  var part1 = 0;
  var part2 = 0;

  var values = day6_input.slice();   
  var iterationRepresentations = [];
  var currentValue;
  while (!iterationRepresentations.includes(currentValue)) {
    if (currentValue) {
      iterationRepresentations.push(currentValue);
    }
    var max = _.max(values);
    var maxIndex = values.indexOf(max);
    var index = maxIndex + 1 < values.length ? maxIndex + 1 : 0;
    values[maxIndex] = 0;
    while (max > 0) {
      values[index] = values[index] + 1;
      max--;
      index = index + 1 < values.length ? index + 1 : 0;
    }
    currentValue = values.join(' ');
    part1 ++;
    if (iterationRepresentations.includes(currentValue)) {
      part2 = iterationRepresentations.length - (iterationRepresentations.indexOf(currentValue));
    }
  }
  appendToDiv(6, part1, part2);
}
