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

//Challenge 7 - Truncate a String

//Solution 1 - Using If Statement and Slice
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

console.log(truncateString("If you are reading this", 8));

//Solution 2 - Using ternary and slice
function truncateString2(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str 
}

console.log(truncateString2("A-tisket a-tasket A green and yellow basket", 8));

//Challenge 8 - Finders Keepers
/*Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.*/

//Solution 1 - For Loop with If Statement
function findElement(arr, func) {
  let num = 0;

  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

console.log(findElement([1, 2, 3, 18], num => num % 2 === 0));

//Solution 2 - Higher Order Function --> Find

function findElement2(arr, func) {
  return arr.find(func);
}

console.log(findElement2([1, 3, 4, 9], function(num) { return num % 2 === 0; }));

//Challenge 9 - Boo Who
/* Check if a value is classified as a boolean primitive. Return true or false.*/

//Solution 1 - Using TypeOf

function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(true);


//Solution 2 - Using Strict ===

function booWho2(bool) {
  if(bool === true || bool === false){
    return true;
  }
  else {
    return false;
  }
}

booWho2(false);

//CHallenge 10 - Title Case a Sentence


//Solution 1 - For Loop
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
console.log(titleCase("I'm a little tea pot"));

//Solution 2 - Map method
function titleCase2(str){
  return str.toLowerCase().split(' ').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ')
}

console.log(titleCase2("In the ny state of mind"));

//Solution 3 - Map and Replace Methods

function titleCase3(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
console.log(titleCase3("live your life free"));

//Challenge 11 - Slice and Splice 
/* Use Slice and Splice to copy 1st array into 2nd array, starting at the nth index of the 2nd array

frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].

*/

//Solution 1 - For Loop
function frankenSplice(arr1, arr2, n) {
  let copyArr = arr2.slice()
  for (let i = 0; i < arr1.length; i++) {
    copyArr.splice(n, 0, arr1[i]);
    n++;
  }
  return copyArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//Solution 2 - Slice, Splice, and Spread Operator

function frankenSplice2(arr1, arr2, n) {
  let copyArr = arr2.slice();
  copyArr.splice(n, 0, ...arr1);
  return copyArr;
}

console.log(frankenSplice2(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))

//Challenge 12 - Falsy Bouncer
/* Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.*/

//Solution 1 - For Loop
function bouncer(arr) {
  let newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}
console.log(bouncer([7, "ate", "", false, 9]));

//Solution 2 - Filter Method and Boolean

function bouncer2(arr) {
  return arr.filter(Boolean)
}

console.log(bouncer(["a", false, "b", "c", ""]));

//Challenge 13 - Where do I Belong

/*  find where in the array a number should be inserted by order, and return the index where it should go.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
*/
//Solution 1 - Sort with For Loop. Finding the item in array that is greater than number and return index
function getIndexToIns(arr, num) {
  arr.sort((a, b) => {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }

  return arr.length;
}

console.log(getIndexToIns([40, 60], 50))

//Solution 2 - Push new number, sort, and return indexOf new number

function getIndexToIns2(arr, num) {
  arr.push(num);
  arr.sort((a,b) => {
    return a - b;
  })

  return arr.indexOf(num)
}

console.log(getIndexToIns2([10, 20, 30, 40, 50], 35))

//Solution 3 - Method Chaining with concat, sort, and indexOf methods

function getIndexToIns3(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

console.log(getIndexToIns3([1, 2, 3, 4], 6))

//Challenges 14 - Mutations
/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.*/

//Solution 1 - Declaritive
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}

console.log(mutation(["hello", "hey"]))

//Solution 2 - Procedural

function mutation2(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

console.log(mutation2(["travel", "travel"]))

//Challenge 15 - Chunky Monkey

/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.*/

//Solution 1 - For Lop with push and slice methods

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arr2 = [];
  for (var i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, i + size));
  }
  return arr2;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))

//SOlution 2 - While Loop with push and splice methods

function chunkArrayInGroups2(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

console.log(chunkArrayInGroups2([0, 1, 2, 3, 4, 5, 6, 7, 8], 4))