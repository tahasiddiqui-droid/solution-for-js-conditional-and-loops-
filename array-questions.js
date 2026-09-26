// ======================================
// ARRAY QUESTIONS
// ======================================

// 1. Print array elements using a for loop
function printArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
console.log("Print array elements:");
printArrayElements([10, 20, 30, 40]);


// 2. Find array length without using .length directly
function getLength(arr) {
  let count = 0;
  for (let item of arr) {
    count++;
  }
  return count;
}
console.log("\nArray length (without .length):");
console.log(getLength([1, 2, 3, 4, 5])); // 5


// 3. Reverse an array without using .reverse()
function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
console.log("\nReversed array:");
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]


// 4. Sum of all numbers in an array
function sumArray(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}
console.log("\nSum of array:");
console.log(sumArray([1, 2, 3, 4, 5])); // 15


// 5. Filter only even numbers from an array
function filterEven(arr) {
  const result = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }
  return result;
}
console.log("\nEven numbers:");
console.log(filterEven([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
