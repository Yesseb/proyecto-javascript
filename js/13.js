let evenCount = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenCount++;
  }
}
console.log(`Hay ${evenCount} números pares del 1 al 100`);