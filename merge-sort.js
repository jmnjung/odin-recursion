/**
 * Checks if array contains only valid numbers.
 * @param {Array<*>} array
 * @returns {boolean}
 */
function containsOnlyNumbers(array) {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number" || Number.isNaN(array[i])) {
      return false;
    }
  }

  return true;
}

/**
 * Merges two sorted arrays containing only valid numbers.
 * @param {Array<number>} firstArray
 * @param {Array<number>} secondArray
 * @returns {Array<number>}
 */
function merge(firstArray, secondArray) {
  const mergedArray = new Array(firstArray.length + secondArray.length);

  let i = 0;
  let j = 0;

  while (i < firstArray.length && j < secondArray.length) {
    if (firstArray[i] < secondArray[j]) {
      mergedArray[i + j] = firstArray[i++];
    } else {
      mergedArray[i + j] = secondArray[j++];
    }
  }

  while (i < firstArray.length) {
    mergedArray[i + j] = firstArray[i++];
  }

  while (j < secondArray.length) {
    mergedArray[i + j] = secondArray[j++];
  }

  return mergedArray;
}

/**
 * Sorts an array containing only valid numbers.
 * @param {Array<number>} array
 * @returns {Array<number>}
 */
function mergeSort(array) {
  if (!containsOnlyNumbers(array)) {
    throw new Error("array must contain only valid numbers");
  }

  if (array.length <= 1) return array;

  const mid = Math.ceil(array.length / 2);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

console.log(
  `Sorted the first 8 Fibonacci numbers recursively: ${mergeSort([
    3, 2, 1, 13, 8, 5, 0, 1,
  ])}`
);
