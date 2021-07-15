/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]; 
function showDaysOfWeek(arrayofStrings){
  for(let i = 0; i<=arrayofStrings.length-1; i++){
    if(arrayofStrings[i].startsWith("T")){
    console.log(arrayofStrings[i]);
    }
  }
}
showDaysOfWeek(daysOfWeek);