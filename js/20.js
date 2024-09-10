console.log("Sumar los dígitos de un número")
function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    console.log(`La suma de los dígitos es ${sum}`);
  }