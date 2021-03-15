let number = parseInt(Number(prompt("Type a number:")));
let sum = 0;
while (!number) {
  alert("Type an valid number");
  number = parseInt(Number(prompt("Type a number:")));
}

if (number < 0) {
  alert("Your number is negative and can't be calculated");
} else {
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  console.log(`Your summation is ${sum}`);
  alert(`Your summation is ${sum}`);
}
