let multiplesOf5Count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    multiplesOf5Count++;
  }
}
console.log(`Hay ${multiplesOf5Count} números del 1 al 100 que son múltiplos de 5`);
