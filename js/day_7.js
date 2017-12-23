function day7() {
  var part1 = null;
  var part2 = 0;
  var subPrograms = "subPrograms";
  var lines = day7_input.split("\n");
  var rootPrograms = [];
  var programs = [];

  _.each(lines, function(line) {
    // fwft (72) -> ktlj, cntj, xhth
    var parts = line.split(" -> ");
    var nameWeight = parts[0].split(" ");
    var program = {
      name:  nameWeight[0],
      weight: parseInt(nameWeight[1].replace(/[()]/g, ""))
    };
    if (parts.length > 1) {
      program.subPrograms = parts[1].split(", ");
      rootPrograms.push(program);
    }
    programs.push(program);
  });

  var bottomProgram = null;
  _.each(rootPrograms, function(currentProgram) {
    if (bottomProgram == null) {
      bottomProgram = currentProgram;
      _.each(rootPrograms, function(program) {
        if (bottomProgram && currentProgram.name != program.name) {
          if (program.subPrograms.includes(currentProgram.name)) {
            bottomProgram = null;
          }
        }
      });
    }
  });

  // TODO: Use recurrsion to iterate through the tree and find the program with wrong weight - start at bottom!
  part1 = bottomProgram.name;
  appendToDiv(7, part1, part2);
}