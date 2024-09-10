console.log("el número mayor entre dos números")
function findMax(a, b) {
  if (a > b) {
    console.log(`${a} es mayor que ${b}`);
  } else if (a < b) {
    console.log(`${b} es mayor que ${a}`);
  } else {
    console.log(`${a} es igual a ${b}`);
  }
}