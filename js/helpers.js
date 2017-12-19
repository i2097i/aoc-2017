function appendToDiv(dayNumber, part1, part2) {
  $('#day-' + dayNumber).html("<strong>Part 1:</strong> " + part1 + "</br><strong>Part 2:</strong> " + part2);
}

function occurrences(arr, val) {
  var count = 0;
  _.each(arr, function(v){
    if (v == val) {
      count ++;
    }
  });
  return count;
}