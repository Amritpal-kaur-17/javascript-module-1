function exponential(number) {
  var num1 = number * number;
  return num1;
}
function isEven(number) {
   var result = (number % 2 === 0  );
   return result;
}
for (i = 5; i<=20; i++){
  if ( isEven(i) == true ) {
  console.log("The exponential of " + i + " is " +  exponential(i));
  }
}
