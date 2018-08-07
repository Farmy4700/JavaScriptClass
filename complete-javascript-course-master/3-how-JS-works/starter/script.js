///////////////////////////////////////
// Lecture: Hoisting

//funtions
function calculateAge(year) { //function declaration
    console.log(2018 - year);
}
calculateAge(1999);

//retirement(1990);  //this must be run after the function expression because function expressions are not hoisted

var retirement = function(year) {  //function expression
    console.log(65 - (2016 - year));
}
retirement(1990); 
////////////////////////////////
///Variables
console.log(age);  //undefined - no value yet
var age = 23;
console.log(age); //23

function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age);








///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









