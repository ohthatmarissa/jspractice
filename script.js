/*******************
 *variables and data types  */

/*var firstName = 'Marissa';
console.log(firstName);

var lastName = 'Perry';
var age = 39;
var fullAge = true;
console.log(fullAge);

var job = 'teacher';
console.log(job);

/******************
 *varaible mutation and type coercion */

/*var firstName = 'Marissa';
var age = 32;

//type coersion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'software engineer';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried);

//variable mutation

age = 'thirty two';
job = 'boss bitch';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried);

var lastName = prompt('what is her last name?');
console.log(firstName + ' ' + lastName);*/

/********************
 * basic operators

var yearMarissa, yearRobert;
var now = 2019;
ageMarissa = 32;
ageRobert = 40;

yearMarissa = now - ageMarissa;
yearRobert = now - ageRobert;
console.log(yearMarissa);
console.log(yearRobert);

console.log(now + 2);
console.log(now * 2);

//logical operators

var marissaOlder = ageMarissa < ageRobert;
console.log(marissaOlder);

console.log(typeof ageMarissa);
*/
/*
var now = 2018;
var yearMarissa = 1980;
var fullAge = 18;

var isFullAge = now - yearMarissa >= fullAge;
console.log(isFullAge);

var ageMarissa = now - yearMarissa;
var ageRob = 40;
var average = (ageMarissa + ageRob) / 2;
console.log(average);

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);
*/
/*
var massMarissa = 63.5;
var massRob = 77.1;

var heightMarissa = 1.753;
var heightRob = 1.7;

var bmiMarissa = massMarissa / heightMarissa * heightMarissa;
var bmiRob = massRob / heightRob * heightRob;
console.log(bmiMarissa, bmiRob);

var bigger = bmiMarissa > bmiRob;
console.log(bigger);

console.log('Is Marissas BMI bigger than Robs?' + bigger);
*/

//if/else statements
/*
var firstName = 'marissa';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' likes not being married!');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' likes not being married!');
}
*/

//boolean logic
/*
var firstName = 'Marissa';
var age = 10;
console.log(firstName);

if (age < 13) {
    console.log(firstName + ' is a girl');
} else if (age >= 13 && age < 18) {
    console.log(firstName + ' is a teen');
} else {
    console.log(firstName + ' is awesome');
}
*/

//ternary operator
/*
var firstName = 'Marissa';
var age = 18;

age >= 21 ? console.log(firstName + ' doesn\'t drink alcohol')
    : console.log(firstName + ' drinks all the juice');

var drink = age >= 21 ? 'no alcohol' : 'juice';
console.log(drink);

//switch statement

var job = 'engineer';
switch (job) {
    case 'developer':
    case 'engineer':
        console.log(firstName + ' is a badass developer');
        break;
    case 'dog walker':
        console.log(firstName + ' walks all the cute dogs');
        break;
    case 'poopface':
        console.log(firstName + ' feels sorry for herself and mopes');
        break;
    default:
        console.log(firstName + ' is getting it together');
}
*/

//truthy and falsy
/*
var height;
height = 0;

if (height || height === 0) {
    console.log('variable has been defined');
} else {
    console.log('variable has not been defined');
}
*/

//code challange
/*
var firstName = 'Marissa';
var scoreMarissa = (120 + 120 + 120) / 3;
var scoreOther = (100 + 100 + 120) / 3;
var scoreMary = (97 + 134 + 105) / 3;

console.log(scoreMarissa, scoreOther, scoreMary);

if (scoreMarissa > scoreOther && scoreMarissa > scoreMary) {
    console.log(firstName + ' is the winner');
} else if (scoreOther > scoreMarissa) {
    console.log(firstName + ' is the loser');
} else {
    console.log('There was a tie!');
}
*/
/*
//functions

function calculateAge(birthyear) {
    return 2019 - birthyear;
}

var ageMarissa = calculateAge(1980);
var ageRob = calculateAge(1978);
console.log(ageMarissa, ageRob);

function yearsUntilRetire(year, firstName) {
    var age = calculateAge(year)
    var retire = 65 - age;

    if (retire > 0) {
        console.log(firstName + ' retires in ' + retire + ' years');
    } else {
        console.log(firstName + ' is already retired');
    }

}
yearsUntilRetire(1980, 'Marissa');
yearsUntilRetire(1978, 'Rob');
yearsUntilRetire(2019, 'Petunia');
yearsUntilRetire(1934, 'Bert');
*/

//funtion expression
/*
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'developer':
            return firstName + ' is a computer wiz!';
        case 'dog walker':
            return firstName + ' walks all the cutest dogs!';
        case 'director':
            return firstName + ' directs all the things';
        default:
            return firstName + ' is trying thier best';
    }
}
console.log(whatDoYouDo('student', 'Marissa'));
console.log(whatDoYouDo('director', 'Robert'));
console.log(whatDoYouDo('developer', 'Marissa'));
*/

//arrays
/*
var names = ['Marissa', 'Rob', 'Merle', 'Petunia'];
var age = [39, 40, 5, 1];

console.log(names[3]);

names[names.length] = 'Tiny';
names[1] = 'Robo';
names.push('cutie');
names.unshift('yay');
names.shift();
names.pop();
console.log(names);
console.log(names.indexOf('Merle'));

*/

//coding challeng 3 tip calculator

function tipCalc(bill) {
    var percent;
    if (bill < 50) {
        percent = .2;
    } else if (bill > 200) {
        percent = .1;
    } else {
        percent = .15;
    }
    return percent * bill;
}
console.log(tipCalc(10));
console.log(tipCalc(100));
console.log(tipCalc(300));

var bills = [124, 48, 268];
var tips = [tipCalc(bills[0]),
tipCalc(bills[1]),
tipCalc(bills[2])];

console.log(tips);

var finalValue = [bills[0] + tips[0],
bills[1] + tips[1],
bills[2] + tips[2]];

console.log(finalValue);