function A000124(n) {
  const series = [];

  for (let i = 0; i < n; i++) {
    const term = (i * (i + 1)) / 2 + 1;
    series.push(term);
  }

  return series.join("-");
}

const input = 7;
const output = A000124(input);

console.log("Input", input);
console.log("Output", output);
