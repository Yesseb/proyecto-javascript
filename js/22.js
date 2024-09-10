let multiplesOf7Count = 0;
for (let i = 50; i <= 150; i++) {
  if (i % 7 === 0) {
    multiplesOf7Count++;
  }
}
console.log(`Hay ${multiplesOf7Count} números del 50 al 150 que son múltiplos de 7`);
