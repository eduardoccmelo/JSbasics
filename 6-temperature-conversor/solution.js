let temperature = prompt(
  "Choose a temperature type - c for celsius and f for fahrenheit"
);

while (temperature) {
  if (temperature === "c" || "C") {
    let celcius = prompt(
      "Type the temperature to be converted to Fahrenheit. Use . to separate the numbers"
    );
    if (isNaN(celcius)) {
      alert("Sorry! Not a valid number...");
      break;
    }
    let FahrenheitTemp = ((celcius - 32) * 5) / 9;
    alert(FahrenheitTemp);
    break;
  } else if (temperature === "f" || "F") {
    let fahrenheit = prompt(
      "Type the temperature to be converted to Celcius. Use . to separate the numbers"
    );
    if (isNaN(fahrenheit)) {
      alert("Sorry! Not a valid number...");
      break;
    }
    let CelciusTemp = (fahrenheit - 32) / (9 / 5);
    alert(CelciusTemp);
    break;
  } else {
    temperature = prompt(
      "Temperature type not valid! Choose c for celsius and f for fahrenheit"
    );
  }
}
alert("Bye!!!");
