export const splitN = (arr, n) => {
  const inc = Math.ceil(arr.length / n);
  return Array(n)
    .fill()
    .map((_, i) => arr.slice(i * inc, (i + 1) * inc));
};
