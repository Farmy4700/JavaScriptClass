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
/*
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
*/

/******************************
 * Operator precedence
 *****************************/
/*
 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

 //Multiple Operators
 var isFullAge = now - yearJohn >= fullAge;  //true
 console.log(isFullAge);
//Grouping
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var aveAge = (ageJohn + ageMark) / 2;

 console.log(aveAge);

 //Multiple Assignments
 var x, y;
 x = y = (3 + 5) * 4 - 6;  // 8 * 4 - 6 // 32 - 6 // 26
 console.log(x, y);

// More operators

x *= 2; // x * 2
console.log(x);
x++ //x + 1
console.log(x);
x-- // x -1
console.log(x);
*/

/************************
 * Coding Challeng 1
 **************************/

 var markHeight, markWeight, johnHeight, johnWeight

 markHeight = 71;
 markWeight = 199;

 johnHeight = 76;
 johnWeight = 192;

 var markBMI = (markHeight * markHeight) / markWeight;
 var johnBMI = (johnHeight * johnHeight) / johnWeight;

 console.log("Mark's BMI = " + markBMI + " and John's BMI is " + johnBMI);

 var markHigherBMI = markBMI > johnBMI;
 console.log("Is Mark's BMI higher? " + markHigherBMI);











































