const splitN = (arr, n) => {
  const inc = Math.ceil(arr.length / n);
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(arr.slice(i * inc, (i + 1) * inc));
  }
  return res;
};

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(splitN(a, 4));

