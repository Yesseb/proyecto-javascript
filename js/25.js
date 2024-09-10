let contains5Count = 0;
for (let i = 1; i <= 100; i++) {
  if (i.toString().includes('5')) {
    contains5Count++;
  }
}
console.log(`Hay ${contains5Count} números del 1 al 100 que contienen el dígito 5`);
