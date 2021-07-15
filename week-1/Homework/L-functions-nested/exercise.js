var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

//function upperclass(greeting){
 //var upperclassgreeting =  
//}


function nameToUppercase(name){
    var uppercaseName = name.toUpperCase();
    return uppercaseName;
}

function shoutygreeting(name){
    var uppercse = "HELLO " + nameToUppercase(name);
    //var uppercse = combine.toUpperCase;

    return uppercse;
}

console.log(shoutygreeting(mentor1));
console.log(shoutygreeting(mentor2));
console.log(shoutygreeting(mentor3));
console.log(shoutygreeting(mentor4));
console.log(shoutygreeting(mentor5));
