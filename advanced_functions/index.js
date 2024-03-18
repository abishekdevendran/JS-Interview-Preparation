console.log("index.js");

for (let i = 0; i < 5; i++) {
  console.log(Math.pow(2, i));
}

function pow(x, n) {
  return n == 1 ? x : x * pow(x, n - 1);
}

console.log(pow(2, 3)); // 8

// Sum all numbers till the given one
// For loop
function summer(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i + 1;
  }
  return sum;
}

console.log(summer(100));

function sumTo(n) {
  if (n === 1) return 1;
  return sumTo(n - 1) + n;
}

console.log(sumTo(100));
console.log((100 * 101) / 2);

cache = {
  1: 1,
  2: 1,
};

function fib(n) {
  if (n === 1) return 1;
  if (n === 2) return 1;
  // console.log(Object.keys(cache));
  if (Object.keys(cache).includes(String(n))) {
    // console.log("Here");
    return cache[n];
  }
  temp = fib(n - 2) + fib(n - 1);
  cache[n] = temp;
  // console.log("Cache: ", cache);
  return temp;
}

console.log(fib(77));
