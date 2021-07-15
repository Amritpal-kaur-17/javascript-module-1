/*
  BOOLEAN WITH COMPARISON OPERATORS
  ---------------------------------
  Using comparison operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/

var studentCount = 16;
var mentorCount = 9;
var moreStudentsThanMentors = true;
var moreStudentsThanMentors2 = false;
if(studentCount > mentorCount){
  console.log("Are there more students than mentors? " + moreStudentsThanMentors);
}else{
  console.log("Are there more students than mentors? " + moreStudentsThanMentors2);
}
// finish this statement

var roomMaxCapacity = 25;
var enoughSpaceInRoom = true; // finish this statement
var enoughSpaceInRoom1 = false;
if(roomMaxCapacity == 25){
  console.log("Is there enough space in the room for all students and mentors? "+
  enoughSpaceInRoom);
}else{
  console.log("Is there enough space in the room for all students and mentors? "+
  enoughSpaceInRoom1);
}


var personA = "Daniel";
var personB = "Irina";
var sameName = true;
var sameName1 = false;
if(personA == personB){
  console.log("Do person A and person B have the the same name? " + sameName);
} else{
  console.log("Do person A and person B have the the same name? " + sameName1);
}// finish this statement

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log("Are there more students than mentors?", moreStudentsThanMentors);
console.log(
  "Is there enough space in the room for all students and mentors?",
  enoughSpaceInRoom
);
console.log("Do person A and person B have the the same name?", sameName);

/* 
  EXPECTED RESULT
  ---------------
  Are there more students than mentors? true
  Is there enough space in the room for all students and mentors? true
  Do person A and person B have the the same name? false
*/
