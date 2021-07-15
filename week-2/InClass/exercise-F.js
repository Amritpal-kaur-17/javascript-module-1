
var usertype = "manager";

var usertype = "admin";
function satisfiesRequirements(username, usertype) {
  if(usertype === "manager" || usertype === "admin"){
     return "Username valid"
  }else if (username.charAt(0) === username.charAt(0).toUpperCase() && (username.length >5 && username.length< 10)) {
      return "username valid";
  }else if(!(username.charAt(0) === username.charAt(0).toUpperCase() && username.length >5  && username.length< 10)) {
      return "Username invalid";
  }
}
 var output = (satisfiesRequirements("Harminder", "manager"));
 console.log(output);