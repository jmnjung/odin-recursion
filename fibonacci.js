/**
 * Finds the first n numbers of the Fibonacci sequence iteratively.
 * @param {number} n
 * @returns {Array<number>}
 */
function fibs(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("n must be a non-negative integer");
  }

  const result = new Array(n);

  for (let i = 0; i < result.length; i++) {
    if (i === 0 || i === 1) {
      result[i] = i;
    } else {
      result[i] = result[i - 1] + result[i - 2];
    }
  }

  return result;
}

/**
 * Finds the first n numbers of the Fibonacci sequence recursively.
 * @param {number} n
 * @returns {Array<number>}
 */
function fibsRec(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("n must be a non-negative integer");
  }

  if (n === 0) return new Array();

  const prevNums = fibsRec(n - 1);
  const nextNum = n <= 2 ? n - 1 : prevNums.at(-1) + prevNums.at(-2);
  prevNums.push(nextNum);
  return prevNums;
}

console.log(`Found none of the Fibonacci numbers iteratively: ${fibs(0)}`);
console.log(`Found none of the Fibonacci numbers recursively: ${fibsRec(0)}`);
console.log(`Found the first 8 Fibonacci numbers iteratively: ${fibs(8)}`);
console.log(`Found the first 8 Fibonacci numbers recursively: ${fibsRec(8)}`);
