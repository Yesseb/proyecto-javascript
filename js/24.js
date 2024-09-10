let divisibleBy3Or4Count = 0;
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 || i % 4 === 0) {
    divisibleBy3Or4Count++;
  }
}
console.log(`Hay ${divisibleBy3Or4Count} números del 1 al 30 divisibles por 3 o por 4`);
