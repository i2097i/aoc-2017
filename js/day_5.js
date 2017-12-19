function day5() {
  var part1Count = 0;
  var part2Count = 0;
  var copy = day5_input.slice();
  var position = 0;
  while (position >= 0 && position < copy.length) {
    var value = copy[position];
    copy[position] = copy[position] + 1;
    position += value;
    part1Count ++;
  }

  position = 0;
  copy = day5_input.slice();
  while (position >= 0 && position < day5_input.length) {
    var value = copy[position];
    copy[position] = copy[position] + (value >= 3 ? -1 : 1);
    position += value;
    part2Count ++;
  }
  appendToDiv(5, part1Count, part2Count);
}