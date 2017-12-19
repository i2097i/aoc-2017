function day4() {
  var key = "key";
  var part1Count = 0;
  var part2Count = 0;
  _.each(day4_input.split("\n"), function(line) {
    line = line.split(' ');
    if(_.uniq(line).length == line.length) { 
      part1Count += 1;

      var isAnagram = false;
      var breakdown = _.map(line, function(l) {
        var mapped = {};
        mapped[key] = l;
        l = l.split('');
        
        _.each(l, function(character) {
          if (mapped[character]) {
            mapped[character] += 1;
          } else {
            mapped[character] = 1;
          }
        });
        
        return mapped;
      });

      // oiii ioii iioi iiio:
      // [
      //   {o: 1, i: 3},
      //   {o: 1, i: 3},
      //   {o: 1, i: 3},
      //   {o: 1, i: 3}
      // ]

      _.each(breakdown, function(map) {
        _.each(breakdown, function(innerMap) {
          // Skip if self and if we already found an anagram
          if (map[key] != innerMap[key] && !isAnagram) {
            var matches = 0;
            var larger = null;
            var smaller = null;
            if (Object.keys(map).length >= Object.keys(innerMap).length) {
              // map contains more than or equal keys than innerMap
              larger = map;
              smaller = innerMap;
            } else {
              // map contains less keys than innerMap
              larger = innerMap;
              smaller = map;
            }
            var matchesNeeded = Object.keys(larger).length - 1;

            // iterate largers's keys and determine if the values all equal larger's values
            _.each(Object.keys(larger), function(k) {
              // undefined keys and the 'key' key
              if (smaller[k] && larger[k] && k != key) {
                if (smaller[k] == larger[k]) {
                  matches += 1;
                }
              }
            });

            if (matches == matchesNeeded) {
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