function modulus() {
  let x = prompt(" Insert the first number - x");
  let y = prompt(" Insert the second number - y");
  let z = x % y;

  if (z > 0) {
    alert("There is a reminder");
  } else {
    alert("There is no reminder");
  }
}

function modulus_one() {
  let a = prompt(" Insert the first number - a");
  let b = prompt(" Insert the second number - b");
  let c = 0;
  if (a % b != c) {
    alert("There is a reminder");
  } else {
    alert("There is no reminder");
  }
}
