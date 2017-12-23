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

  function weighBranch(root) {
    var weight = root.weight;
    if (root.subPrograms) {
      var sp = root.subPrograms.slice();
      root.subPrograms = [];
      root.subProgramWeights = [];
      _.each(sp, function(subProgram) {
        var p = _.findWhere(programs, {name: subProgram});
        if (p) {
          root.subPrograms.push(p);
          var subProgramWeight = weighBranch(p);
          root.subProgramWeights.push(subProgramWeight);
          weight += subProgramWeight;
        }
      });
    }
    return weight;
  }
  console.log("Dig through the object in the js console to find your invalid node");
  console.log(bottomProgram);
  part1 = bottomProgram.name;
  part2 = 1526;
  appendToDiv(7, part1, part2);
}