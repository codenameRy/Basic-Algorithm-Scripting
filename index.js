//Challenge 1 - Convert Celsius to Farenheit

function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

console.log('30 Celsius is equal to ' + convertToF(30) + ' Farenheit');

//Challenge 2 - Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

//Challenge 3 - Factorialize a Number
// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

//Solution 1 - For Loop Iterative
//For all numbers passed to the function which are greater than one (1), the simple for loop will decrement num by one each iteration and recalculate product down to the value 1.
function factorialize(num) {
  for (var product = 1; num > 0; num--) {
    product *= num;
  }
  return product;
}

console.log(factorialize(5));

//Solution 2 - Recursion
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
// For example: 5! = 1 * 2 * 3 * 4 * 5 * 6 = 720
console.log(factorial(6));

//Challenge 4 - Find the longest word in a string and return number

//SOlution 1 - For Loop Iterative
function findLongestWordLength(str) {
  var words = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//Challenge 5 - Return Largest Numbers in Arrays

//Solution 1 - Procedural Approach
function largestOfFour(arr) {
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    var longestArr = arr[i][0];
    for (var j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > longestArr) {
        longestArr = arr[i][j];
      }
    }
  results[i] = longestArr
  }
  return results;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

//Solution 2 - Declaritive Approach // Map and Reduce Hiher order functions

function largestOfFour2(arr) {
  return arr.map( (group) => {
    return group.reduce( (a, b) => {
      return b > a ? b : a
    })
  })
}

console.log(largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))