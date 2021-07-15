var peopleBornYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
//function bornyear(year){
 //   var output = 2021 - year;

//}
const result = peopleBornYear.filter(canDerive);

function canDerive(year){
    let age = 2021 - year;
    return >= 17;
   

}
console.log(result);