function countPrimeNumbers() {
  let count = 0;
  let primo;
  for (let i = 2; i <= 100; i++) {
    primo = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        primo = false;
        break;
      }
    }
    if (primo) { count += 1;}
  }
  return count;
}

const t0 = performance.now();
for (let index = 0; index < 100; index++) {
  countPrimeNumbers();
}
const t1 = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`);