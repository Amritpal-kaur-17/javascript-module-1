// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var result = numbers.map((num) => {
    return num * 100;

});
console.log(result);

function multiply(digit) {
    return digit * 100;
  }
  
  var numarray = [0.1, 0.2, 0.3, 0.4, 0.5];
  var numbersmultiply = numbers.map(multiply);
  console.log(numbersmultiply)