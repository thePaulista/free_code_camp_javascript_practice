//challenge 1: reverse a string

function reverseString(str) {
  return str.split('').reverse().join('');
}

 reverseString("hello");

 //challenge 2: factorialize a number

 function factorialize(num) {
   if (num === 0 ) {
     return 1;
   } else  {
     return num * factorialize(num - 1);
   }
 }

 factorialize(5);

// challenge 3: check for palindromes

var forward;
var backward;

function palindrome(str) {
  forward = str.toLowerCase().replace(/\W|_/g, '');
  backward = forward.split('').reverse();
  return forward === backward;
}
 /*
 palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.
*/

// challenge 4: find  the longest word in a string

function findLongestWord(str) {
  var splitted = str.split(' ');
  var golden = 0;

  for (var i = 0; i < splitted.length; i ++) {
    if (golden < splitted[i].length){
      golden = splitted[i].length;
    }
  }
  return golden;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//challenge 5: capitalize the first letter of each word

function titleCase(str) {
  var capitalized = [];
  var word = str.split(" ");

  for (var i = 0; i < word.length; i++) {
    capitalized.push(word[i][0].toUpperCase() + word[i].slice(1).toLowerCase());
  }
  return capitalized.join(' ');
}

titleCase("I'm a little tea pot");

/*
titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".
*/

//challenge 6: return the highest value in each array;

function largestOfFour(arr) {
  mini = 0;
  collection = [];
  for (var i = 0; i < arr.length; i++) {
    mini = Math.max.apply(Math, arr[i]);
    collection.push(mini);
  }
  return collection;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//challenge 8: Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.

function repeat(str, num) {
  if (num < 0) {
    return "";
  } else {
    return str.repeat(num);
  }
}

repeat("abc", 3);
