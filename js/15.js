console.log("los primeros 10 números de la serie de Fibonacci")
let v = 0, r = 1;
console.log(v);
console.log(r);
for (let i = 2; i < 10; i++) {
  let next = v + r;
  console.log(next);
  v = r;
  r = next;
}