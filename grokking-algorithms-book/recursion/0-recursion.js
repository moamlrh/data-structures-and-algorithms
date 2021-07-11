const factorialOf = (num) => (num == 1 ? num : num * factorialOf(num - 1));

console.log(factorialOf(5)); // 120
