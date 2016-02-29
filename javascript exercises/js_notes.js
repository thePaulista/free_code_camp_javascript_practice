//loop through nested arrays
var arr = [
  [1,2], [3,4], [5,6]
];

for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
//
function multiplyAll(arr) {
  var product = 1;

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      product *= multiplyAll[i][j];
    }
  }
  return product;
}

multiplyAll([[1,2], [3,4], [5,6,7]]);
multiplyAll([[1],[2],[3]]); //should return 6
multiplyAll([[1,2],[3,4],[5,6,7]]); //should return 5040
multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])); //should return 54

//iterate with javascript while loops

var ourArray = [];
var i = 0;
while (i < 5) {
  ourArray.push(i);
  i++;
}

var myArray = [];
var i = 0;
while(i < 5) {
  myArray.push(i);
  i++;
}

//js random number

function ourFunction(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
 ourFunction( 1, 9);
//

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);

//
//constructor functions are capitalized.
//in constructor this variable refers to the new object being created by the constructor.
//constructo is a description the object will created

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 1;
};

var MotorBike = function() {
  this.engines = 1;
  this.wheels = 2;
  this.seats = 2;
};

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 1;
};

//create the object by calling new to the constructor

var Car = function () {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 1;
};

var myCar = new Car();
myCar.nickname = "Nemo";

// passing arguments to constructors
var Car = function(wheels, seats, engines) {
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

var myCar = new Car(2, 4, 2);

//this keyword is a reference to public propert.
//to make private method and property, use var inside constructor.

var Car = function() {
  // this is a private variable
  var speed = 10;

  //these are public methods that can be called from outside
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};
 //

 var Bike = function () {
   var gear = 0
   this.setGear = function(num) {
     gear = num;
   };
   this.getGear = function() {
     return gear;
   };
 };

 var myCar = new car();
 var myBike = new Bike();
 myBike.setGear(3); // returns 3
 myBike.setGear(1); // returns 1

//using map to itereate over arrays
var timesFour = oldArray.map(function(val)) {
  return val * 4;
});

//map
var oldArray = [1,2,3,4,5];

var newArray = oldArray.map(function(val) {
  return val + 3;
});

//reduce
var array = [4,5,6,7,8];
var singleVal = 0;

singleVal = array.reduce(function(singleVal, val) {
 return singleVal + val;
});

//reduce

var singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal - currentVal;
}, 0 );

//filter

array = array.filter(function(val)) {
  return val !== 5;
});

// filter

var oldArray = [1,2,3,4,5,6,7,8,9,10];

var newArray = oldArray.filter(function(val) {
  return val <= 5;
});

//sort array from smallest to largest number

var array = [1, 12, 21, 2];
array.sort(function(a,b) {
  return a - b;
});

//sort array from largest to smallest number

var array = [1, 12, 21, 2];

array.sort(function(a, b) {
  return b - a;
});

//reverse array

var array = [1,2,3,4,5,6,7];
var newArray = [];

newArray = array.reverse();

//concactenate

var oldArray = [1,2,3];
var newARray = [];

var concatMe = [4, 5, 6];

newArray = oldArray.concat(concatMe);

//split by space
var string = "Split me into an array";
var array = [];

array = string.split(' ');

// join method

var joinMe = ["Split", "me", "into", "an", "array"];
var joinedString = '';

joinedSTring = joinMe.join(" ");

// joining veggies with and

var veggies = ["Celery", "Radish", "Carrot", "Potato"];
var salad = veggies.join(" and ");
console.log(salad):
