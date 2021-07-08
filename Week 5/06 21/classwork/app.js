let birthYear = +prompt("enter your birth year");

let currentDate = new Date();
let currentYear = currentDate.getFullYear();



if ( typeof birthYear != 'number'){
    let result = currentYear-birthYear
    console.log(result)
} else {
    alert( 'it is not a number, enter a birth year')
    
}