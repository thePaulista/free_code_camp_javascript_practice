var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

myDog.name = "Happy Coder";

// ********
//adding additional keys and values

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

myDog.bark = "woof";
//*********
// delete attributes

var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"],
  "bark": "woof"
};

delete myDog.tails;

//bypassing the usageof switch and if/else by using hashes to look up value

function phoneticLookup(val) {
  var result = "";

  var phonetics = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo":"Easy",
    "foxtrot": "Frank"
  }

    result = phonetics[val]
  return result;
}

phoneticLookup("charlie");
phoneticLookup("delta");
phoneticLookup("echo");

//using .hasOwnProperty to evaluate true/false

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
 if (myObj.hasOwnProperty(checkProp)) {
  return myObj[checkProp];
} else {
  return "Not Found";
}
}

// Test your code by modifying these values
checkObj("gift");
checkObj("pet");
