let evenSum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  }
}
console.log(`La suma de los números pares del 1 al 100 es ${evenSum}`);