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
/*
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
*/

/*****************************
 * If Else Statements
 */

/* var firstName = 'John';
 var civilStatus = 'single';

 if (civilStatus === 'married') {
     console.log(firstName + ' is married');
 } else {
     console.log(firstName + ' is single');
 }

 
 
 var isMarried = false;

 if (isMarried) {  //no need for === true on boolean
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' is single');
}

var markHeight, markWeight, johnHeight, johnWeight

markHeight = 71;
markWeight = 199;

johnHeight = 76;
johnWeight = 192;

var markBMI = (markHeight * markHeight) / markWeight;
var johnBMI = (johnHeight * johnHeight) / johnWeight;

console.log("Mark's BMI = " + markBMI + " and John's BMI is " + johnBMI);

//var markHigherBMI = markBMI > johnBMI;
//console.log("Is Mark's BMI higher? " + markHigherBMI);

if (markBMI > johnBMI) {
    console.log('Mark is fatter than John.');
}
else {
    console.log('John is fatter than Mark');
}
*/



/****************************
 * Boolean Logic
 *****************************/

/* var firstName = 'John';
 var age = prompt('How old is John?')//popup window asking how old john is

 if (age <  13) {
     console.log(firstName + ' is a boy');
 } else if (age >= 13 && age < 20) { //between 13 and 20
    console.log(firstName + ' is a teenager');
 } else if(age >=20 && age < 30 ) {
     console.log(firstName + 'John is a young man.');
 } else {
     console.log(firstName + ' is a man.');
 }
*/

/***************************
 * The ternary operator and switch statements
 ******************************/
/*
var firstName = 'John';
var age = 16;

//ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/* if (age >= 18) { //how to write above statement with if else
    var drink = 'beer';
} else {
    var drink = 'juice';
}
/*
*/


//switch statement
/*
var job = 'teacher';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives a truck');
        break;
    default:
        console.log(firstName + ' does something else.');
}
*/
/*
var age = prompt('How old is John?')//popup window asking how old john is

if (age <  13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) { //between 13 and 20
   console.log(firstName + ' is a teenager');
} else if(age >=20 && age < 30 ) {
    console.log(firstName + 'John is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/*
var age = prompt('How old is John?')//popup window asking how old john is
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >=20 && age < 30:
        console.log(firstName + 'is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.')
}
/*

/*******************************
 * Truthy and Falsy values and equality operators
 ******************************/
// falsy values:  undefined, null, 0, '' , NaN
//truthy values:  All that are not falsy values
/*
var height;

height = 23;

if (height  || height === 0) { 
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

//Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
}
*/

/****************************
 * Coding Challenge 2
 *************************/
/*
 var markTeamAvg, johnTeamAvg, maryTeamAvg;  //variables to hold average score

 var mtGame1, mtGame2, mtGame3, jtGame1, jtGame2, jtGame3, maryGame1, maryGame2, maryGame3;  //variables to hold score of each game
 //setting scores for each game
 jtGame1 = 89;
 jtGame2 = 120;
 jtGame3 = 103;

 mtGame1 = 94;
 mtGame2 = 116;
 mtGame3 = 123;

 maryGame1 = 97;
 maryGame2 = 134;
 maryGame3 = 105;
 
 johnTeamAvg = ((jtGame1 + jtGame2 + jtGame3) / 3);
 markTeamAvg = ((mtGame1 + mtGame2 + mtGame3) / 3);
 maryTeamAvg = ((maryGame1 + maryGame2 + maryGame3) / 3);
 console.log(markTeamAvg + ' is Mark\'s average score.')
 console.log(johnTeamAvg + ' is John\'s average score.')
 console.log(maryTeamAvg + ' is Mary\'s average score.')

 switch (true) {
 case johnTeamAvg > markTeamAvg && johnTeamAvg > maryTeamAvg:
    console.log('John\'s team is the winner.');
    break;
 
 case (markTeamAvg > johnTeamAvg && markTeamAvg > markTeamAvg):
    console.log('Mark\'s team is the winner.');
    break;
 case (markTeamAvg === johnTeamAvg === maryTeamAvg):
    console.log('It was a 3 way tie');
    break;
case (markTeamAvg === johnTeamAvg && maryTeamAvg > markTeamAvg):
    console.log('Mary is the winner');
  default:
     console.log('Mary\'s team is the winner.');
 }
 */

 /*********************************************
  * Functions
  ********************************************/
 // var birthyear = prompt('What year were you born?')
 /*
  function calculateAge(birthyear) {
     return 2018 - birthyear;
 }

 //var ageJohn = calculateAge(birthyear);
 var ageJohn = calculateAge(1992);
 var ageMark = calculateAge(1948);
 var ageMike = calculateAge(1973);

 console.log(ageJohn, ageMark, ageMike);

 function yearsUntilRetirement(year, firstName) {
     var age = calculateAge(year);
     var retirement = 65 - age;

     if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
     }
     else{
         console.log(firstName + ' is retired');
     }
     
 }

 yearsUntilRetirement(1990, 'John');
 yearsUntilRetirement(1969, 'Mike');
 yearsUntilRetirement(1943, 'Jane');
 */

 /**********************************
  * Function Statements and Expressions
  ***********************************/

 //Function deckaratrion
 // function whatDoYouDo(job, firstName){}

  //Function expression
  /*
  var whatDoYouDo = function(job, firstName) {
      switch(job) {
          case 'teacher':
            return firstName + ' teaches kids how to code';
          case 'driver':
            return firstName + ' drives for Uber';
          case 'designer':
            return firstName + ' designs cool things';
          default: 
            return firstName + ' does something else';

      }
  }
  console.log(whatDoYouDo('teacher', 'John'));
  console.log(whatDoYouDo('driver', 'Mary'));
  console.log(whatDoYouDo('designer', 'Mike'));
  */

  /*************************************
   * Arrays
   *************************/
/*
//Initializa new array   
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

//mutate array data   
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//Different data types

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');  //push adds to the end of array
john.unshift('Mr.'); //unshift adds to the beginning of the array
console.log(john);

john.pop();  //pop removes item from the end of the array
console.log(john);
john.pop();
console.log(john);
john.shift(); //removes from the beginning of the array
console.log(john);

console.log(john.indexOf(1990));  //indexOf returns a position of an array item

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer.' : 'John IS a designer.';
console.log(isDesigner);
*/

function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if ( bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}
//console.log(tipCalculator(100));  //testing the function

var bill = [124, 268, 48];
var tips = [tipCalculator(bill[0]), tipCalculator(bill[1]), tipCalculator(bill[2])];

var finalValues = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

console.log(tips, finalValues);









































































