function day2() {
  var rows = _.map(day2_input.split("\n"), function(line) {
    return _.map(line.replace(/  /g, " ").split(" "), function(l) { return parseInt(l);});
  });

  var firstSum = 0;
  var secondSum = 0;
  _.each(rows, function(row) {
    firstSum += _.max(row) - _.min(row);

    var found = false;
    _.each(row, function(even) {
      _.each(row, function(v) {
        if (even != v && !found) {
          if (even % v == 0) {
            secondSum += even / v;
            found = true;
          } else if (v % even == 0) {
            secondSum += v / even;
            found = true;
          }
        }
      });
    });
  });
  appendToDiv(2, firstSum, secondSum);
}