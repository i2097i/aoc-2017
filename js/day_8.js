function day8() {
  var part1 = 0;
  var part2 = 0;

  var lines = day8_input.split("\n");
  var registers = {};
  var instructions = [];
  _.each(lines, function(line) {
    // c dec -10 if a >= 1
    // ["c", "dec", "-10", "if", "a", ">=", "1"]
    var parts = line.split(" ");
    var registerName = parts[0];
    var operator = parts[1];
    var amount = parts[2];
    var conditionRegister = parts[4];
    var conditionOperator = parts[5];
    var conditionConstant = parts[6];

    if (!Object.keys(registers).includes(registerName)) {
      registers[registerName] = 0;
    }

    instructions.push({
      name: registerName,
      operator: operator,
      amount: parseInt(amount),
      condition: {
        register: conditionRegister,
        operator: conditionOperator,
        constant: parseInt(conditionConstant)
      }
    });
  });

  function isConditionTrue(condition) {
    var conditionRegisterValue = registers[condition.register];
    switch (condition.operator) {
      case "<":
        return conditionRegisterValue < condition.constant;
      case "<=":
        return conditionRegisterValue <= condition.constant;
      case ">":
        return conditionRegisterValue > condition.constant;
      case ">=":
        return conditionRegisterValue >= condition.constant;
      case "==":
        return conditionRegisterValue == condition.constant;
      case "!=":
        return conditionRegisterValue != condition.constant;
    }
  }

  var maxEver = 0;
  _.each(instructions, function(instruction) {
    if (isConditionTrue(instruction.condition)) {
      if (instruction.operator == 'inc') {
        registers[instruction.name] = registers[instruction.name] + instruction.amount; 
      } else {
        registers[instruction.name] = registers[instruction.name] - instruction.amount;
      }

      var currentMax = _.max(registers);
      if (currentMax > maxEver) {
        maxEver = currentMax;
      }
    }
  });

  part1 = _.max(registers);
  part2 = maxEver;
  appendToDiv(8, part1, part2);
}