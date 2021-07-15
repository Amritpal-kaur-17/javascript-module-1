var studentsClass1 = ["Suman", "Maxwell", "Elmeria", "Rana"];
var studentsClass2 = ["Bianca", "Said", "Lizia", "Amri tpal"];
var studetntsClass3 = studentsClass1.concat(studentsClass2);
const orderedLetters = studetntsClass3.sort();
console.log(orderedLetters);
function nameOfStudents(name, array){
    if (array.includes(name)){
        return name + "is at the class with " + array;
}
      return name + "is not at the class with " + array;
}
console.log(nameOfStudents("diego", orderedLetters));