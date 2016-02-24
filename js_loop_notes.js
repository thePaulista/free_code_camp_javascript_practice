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
