let count = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    count++;
  }
}
console.log(`Hay ${count} números del 1 al 50 divisibles entre 3`);
