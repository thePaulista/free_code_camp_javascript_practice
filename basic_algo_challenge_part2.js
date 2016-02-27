//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.
//Note that the three dots at the end add to the string length.
//If the num is less than or equal to 3, then the length of the three dots is not added to the string length.

/*
truncate("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".
truncate("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
truncate("A-", 1) should return "A...".
truncate("Absolutely Longer", 2) should return "Ab...".
*/

function truncate(str, num) {
  var stringNum = num - 3;
  var cutString = str.slice(0, stringNum);
  var stringLength = str.length;

  if (num <=3) {
    return str.slice(0, num) + "...";
  } else if (str.length > num) {
    return cutString + "...";
  } else {
    return str;
  }
}

truncate("A-tisket a-tasket A green and yellow basket", 11);

//Return the remaining elements of an array after chopping off n elements from the head.
//The head means the beginning of the array, or the zeroth index.
/* slasher([1, 2, 3], 2) should return [3].
slasher([1, 2, 3], 0) should return [1, 2, 3].
slasher([1, 2, 3], 9) should return [].
slasher([1, 2, 3], 4) should return [].
slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4].
*/

function slasher(arr, howMany) {
  return arr.splice(howMany);
}

slasher([1,2,3], 2);

/*Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, where([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

where([10, 20, 30, 40, 50], 35) should return 3.
where([10, 20, 30, 40, 50], 30) should return 2.
where([40, 60], 50) should return 1.
where([3, 10, 5], 3) should return 0.
where([5, 3, 20, 3], 5) should return 2.
where([2, 20, 10], 19) should return 2.
where([2, 5, 10], 15) should return 3.
*/

function where(arr, num) {
  var sorted = arr.sort(function(a,b) {
    return a-b;
  });
  var filtered = sorted.filter(function(val)
  return val < num;
  });
  return filtered.length;
}

where([40, 60], 50);

//Confirm the ending. Check if a string (first argument) ends with the given target string (second argument).
/*

true

end("Bastian", "n") should return true.
end("Connor", "n") should return false.
end("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
end("He has to give me a new name", "name") should return true.
end("He has to give me a new name", "me") should return true.
end("He has to give me a new name", "na") should return false.
end("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
*/

function end(str, target) {
  var targetLength = target.length;
  var lastWord = str.split(' ').pop();
  var targetWord = lastWord.substr(lastWord.length - targetLength);
  return targetWord == target;
}

end("Bastian", "n");

//
