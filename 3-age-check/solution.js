alert("Welcome!");

let name = prompt("What's your name?");
while (!name) {
  alert("Type a valid name");
  name = prompt("What's your name?");
}
let yearOfBirth = Number(prompt("What's your year of birth?"));

while (Number.isNaN(yearOfBirth) === true) {
  alert("Please enter a valid number");
  yearOfBirth = Number(prompt("What's your year of birth?"));
}

if (!yearOfBirth) {
  yearOfBirth = 2021;
}

let age = 2021 - yearOfBirth;

if (age < 0) {
  alert(`You don't exist ${name}. Come back when you are born!`);
} else if (age <= 10) {
  alert(`You are too young for this ${name}. Come back when you are older.`);
} else if (age > 10 && age < 18) {
  let confirmation = confirm("Are you next to an adult?");
  if (confirmation === true) {
    alert(
      `Welcome to my super website ${name}. Good, that you are not alone here!`
    );
  } else {
    alert(
      `You are too young for this ${name}. You need an adult next to you to continue.`
    );
  }
} else if (age === 32) {
  alert(`Welcome to my super website ${name}. We are the same age!`);
} else {
  alert(`Welcome to my super website ${name}`);
}

console.log(name);
console.log(yearOfBirth);
console.log(age);
