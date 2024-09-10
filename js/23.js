let greaterThan25Count = 0;
for (let i = 1; i <= 50; i++) {
  if (i > 25) {
    greaterThan25Count++;
  }
}
console.log(`Hay ${greaterThan25Count} números del 1 al 50 que son mayores que 25`);