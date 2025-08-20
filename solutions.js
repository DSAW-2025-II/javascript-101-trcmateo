// Sum of Two Numbers
function sum(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    console.log("Los datos de entrada no son adecuados");
  }
}

// Factorial of a Number
function factorial(n) { 
  if (typeof n !== 'number' || n < 0) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  
  return largest;
}

// Count Vowels in a String
function countVowels(str) {
  // Check if input is a string
  if (typeof str !== 'string') {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  const vowelMatches = str.match(/[aeiou]/gi);
  return vowelMatches ? vowelMatches.length : 0;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== 'number') {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
