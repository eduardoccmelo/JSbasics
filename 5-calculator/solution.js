let operation = prompt(
  "Which operation do you want to do? Type one of these: +, -, *, / or type exit to leave. You can also leave by cancelling the prompt"
);

while (operation !== "exit") {
  if (operation == "+") {
    let operand1 = Number(prompt("Type your first number"));
    let operand2 = Number(prompt("Type your second number"));
    alert(operand1 + operand2);
    operation = prompt(
      "Which operation do you want to do? Type one of these: +, -, *, / or type exit to leave. You can also leave by cancelling the prompt"
    );
  } else if (operation == "-") {
    let operand1 = Number(prompt("Type your first number"));
    let operand2 = Number(prompt("Type your second number"));
    alert(operand1 - operand2);
    operation = prompt(
      "Which operation do you want to do? Type one of these: +, -, *, / or type exit to leave. You can also leave by cancelling the prompt"
    );
  } else if (operation == "*") {
    let operand1 = Number(prompt("Type your first number"));
    let operand2 = Number(prompt("Type your second number"));
    alert(operand1 * operand2);
    operation = prompt(
      "Which operation do you want to do? Type one of these: +, -, *, / or type exit to leave. You can also leave by cancelling the prompt"
    );
  } else if (operation == "/") {
    let operand1 = Number(prompt("Type your first number"));
    let operand2 = Number(prompt("Type your second number"));
    alert(operand1 / operand2);
    operation = prompt(
      "Which operation do you want to do? Type one of these: +, -, *, / or type exit to leave. You can also leave by cancelling the prompt"
    );
  } else if (operation == "%") {
    let operand1 = Number(prompt("Type your first number"));
    let operand2 = Number(prompt("Type your second number"));
    alert(operand1 % operand2);
    operation = prompt(
      "Which operation do you want to do? Type one of these: +, -, *, / or type exit to leave. You can also leave by cancelling the prompt"
    );
  } else if (operation === null) {
    break;
  } else {
    operation = prompt(
      "Try again! Which operation do you want to do? Type one of these: +, -, *, / or type exit to leave. You can also leave by cancelling the prompt"
    );
  }
}
alert("Bye!!!");
