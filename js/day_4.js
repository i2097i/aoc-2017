function day4() {
  var part1Count = 0;
  var part2Count = 0;
  _.each(day4_input.split("\n"), function(line) {
    var l = line.split(' ');
    if(_.uniq(l).length == l.length) { 
      part1Count += 1;

      var isAnagram = false;
      _.each(l, function(outerWord) {
        var outerCharacters = outerWord.split("");
        _.each(l, function(innerWord) {
          if (outerWord != innerWord) {
            if (!isAnagram && _.intersection(outerCharacters, innerCharacters).length == outerCharacters.length) {
              var innerCharacters = innerWord.split("");
              console.log('-' * 20);
              console.log(outerCharacters);
              console.log(innerCharacters);
              console.log(_.intersection(outerCharacters, innerCharacters));
              isAnagram = true;
            }
          }
        });
      });

      if (!isAnagram) {
        part2Count += 1;
      }
    }
  });
  appendToDiv(4, part1Count, part2Count);
}