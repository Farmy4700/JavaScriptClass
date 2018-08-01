/***********************
This lecture is about variables and datatypes
************************/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if 23;


/**************************
 * Variable Mutation and type coercion
 **************************/
/*
var firstName = 'John';
age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//VARIABLE MUTATION
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his name?');
console.log(firstName + ' ' + lastName);
*/

/**************************************
 * Basic Operators
 **************************************/

var now, yearJohn, yearJohn, ageJohn, ageMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
yearJohn = now - ageJohn; 
yearMark = now - ageMark;
console.log(yearJohn);
//Math Operators
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//Logical Operators
if (ageMark > ageJohn) {
    console.log("John is the oldest");
}
else {
    console.log("Mark is the oldest");
}

var johnOlder = ageMark < ageJohn;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof now);

 


























