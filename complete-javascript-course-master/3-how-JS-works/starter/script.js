///////////////////////////////////////
// Lecture: Hoisting
/*
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
*/

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';                //Global scope 
first();                         //global scope 

function first() {               
    var b = 'Hi!';               //function scope
    second();                    //function scope 

    function second() {
        var c = 'Hey!';             //scope of second function
        console.log(a + b + c);     //scope of second function 
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
    console.log(a + b + c + d);  //can only access a and d
}
*/


///////////////////////////////////////
// Lecture: The this keyword

//Rugular funciton call:  the this keyworkd points at the global object, the windows object in the browser
//Method Call: the this variable points to the object that is calling the method

//The this keyword is not assigned a value until a function where it is definied is actually called

//console.log(this);
/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2018 - year);
    console.log(this);  //still pointing to global object(regualr function call)
}
*/
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2018 - this.yearOfBirth);
/*
        function innerFunction() {
            console.log(this);  //now it is back to window - this is a regular function
        }
        innerFunction(); */
    }
}
john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;  //now we are borrow johns calculateAge function to be used for Mike

mike.calculateAge();









