function Bornyear(age){
    const result =2021 - age ;
    return result;
}


    function PersonDetail(name, age){
    const year = Bornyear(age)
    const message = "My Name is " + name + " I was born in the year "+ year;
    return message;
}
    
    console.log(PersonDetail("Amritpal", "33"));