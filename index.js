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

//Challenge 6 - Confirm the Ending of String

//Solution 1
function confirmEnding(str, target) {
  //Split array into different words
  let split = str.split(" ");
  //Check if split length is 1 for one word or greater > than 1 for multi word
  if(split.length > 1){
    let lastWord = split[split.length - 1];
    return lastWord.substring(lastWord.lastIndexOf(target)) === target;
  } else {
    return str.substring(str.lastIndexOf(target)) === target;
  }
}

console.log(confirmEnding("Open sesame house", "same"));

//Solution 2 - Declaritive Approach
function confirmEnding2(str, target) {
  //Slice method to copy the string 
  //str.length - starting index 
  //target.length - ending index
  return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding2("He has to give me a new name", "name"));

//Challenge 7 - Repeat a String Repeat a String

//Solution 1 - While Loop
function repeatStringNumTimes(string, times) {
  //Create an empty string variable to store the repeated word
  var repeatedString = "";
  //while loop to repeat as needed
  while (times > 0) {
    repeatedString += string; //Add string to repeatStr variable
    times--; //Decrement from n times to zero
  }
  return repeatedString;
}

console.log(repeatStringNumTimes("abc", 3));

//Solution 2 ES6 Repeat method
function repeatStringNumTimes2(string, times) {
  //If times is positive, return the repeated string
  if (times > 0) { // (3 > 0) => true
    return string.repeat(times); // return "abc".repeat(3); => return "abcabcabc";
  }
  //Else if times is negative, return an empty string if true
  else {
    return "";
  }
}
console.log(repeatStringNumTimes2("yo", 2));
