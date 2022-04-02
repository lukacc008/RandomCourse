/*const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const YearsUntilRetirement = function (birthYear,
     firstName) {
         const age = calcAge(birthYear);
         const retirement = 65 - age;
         if (retirement > 0) {
            console.log(`${firstName} retires in ${retirement} years`)
            return retirement;
         } else {
             console.log(`${firstName} has already retired`)
             return -1;
         }
     }

console.log(YearsUntilRetirement(1991, 'Jonas'));
console.log(YearsUntilRetirement(1970, 'Mike'));
*/
/*
const calcAverage = (a,b,c) => {
    return (a + b + c) / 3
}
console.log(calcAverage(85,54,41));
console.log(calcAverage(23,34,27));

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgKoalas > avgDolphins) {
        console.log(`Koalas win (${avgKoalas} to ${avgDolphins}) !!`)
    } else {
        console.log(`Dophins win (${avgDolphins} to ${avgKoalas}) !!`)
    }
}
console.log(checkWinner(60,28))
*/
                                               //SKUPOVI (ARRAYS)
/*
const friend1 = 'Michael';
const friend2 = 'Stieven';
const friend3 = 'Peter'; 

const friends = ['Michael', 'Stieven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas'
const jonas = [firstName , 'Schmedtmann', 2037 - 1991,
'teacher', friends];
console.log(jonas);
console.log(jonas.length);

                                                // Exercise 
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

 const age1 = calcAge(years[0]);
 const age2 = calcAge(years[1]);
 const age3 = calcAge(years[years.length - 1]);
 console.log(age1, age2, age3);

 const ages = [calcAge(years[0]), calcAge(years[1]),
  calcAge(years[years.length - 1])];
*/
//                                             ADD ELEMENTS

/*
const friends = ['Michael', 'Stieven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//                                            REMOVE ELEMENTS
friends.pop(); 
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.includes('Stieven'));
console.log(friends.includes('Bob'));

if (friends.includes('Stieven')) {
    console.log('You have a freind called Stieven');
}
*/
/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
    bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2]),];
console.log(tips, bills);
*/

/////////////////////////////////////////////////////////////////OBJEKTI
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
    };
    
console.log(jonas);

console.log(jonas.lastName); 
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey) ----- NE RADI JER '.' MORA DA IMA PRAVU VREDNOST

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if(jonas[interestedIn]) {
console.log(jonas[interestedIn]);    
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman'
console.log(jonas);

/////////////////////////////////////////////////////////////// CHALLENGE
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)
*/
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

   // calcAge: function () {
   //     console.log(this);
   //     return 2037 - this.birthYear;
   // }
   calcAge: function () {
       this.age = 2037 - this.birthYear;
       return this.age
   },
   getSummary: function () {
       return `${jonas.firstName} is a ${jonas.calcAge()}-year old ${jonas.job}.And he has ${jonas.hasDriversLicense ? 'a' : 'no'} driver's license`
   }

    };

    console.log(jonas.calcAge());

    console.log(jonas.age);
    console.log(jonas.age);
    console.log(jonas.age);
    console.log(jonas.getSummary());


///////////////////////////////////////////////////////CODING CHALLENGE #4
/*

const MarkBMI = {
    name: "Mark Miller",
    mass: 78,
    height: 1.69,
    
    calcBMI: function () {
     this.BMI = this.mass / this.height ** 2;
      return this.BMI
    },
    
}

const JohnBMI = {
    name: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
         return this.BMI
       }
    }

MarkBMI.calcBMI();
JohnBMI.calcBMI();



if(MarkBMI.BMI > JohnBMI.BMI) {
    console.log(`${MarkBMI.name}'s BMI(${MarkBMI.BMI}) is higher than ${JohnBMI.name}'s BMI(${MarkBMI.BMI})`)
} else if (JohnBMI.BMI > MarkBMI.BMI) {
    console.log(`${JohnBMI.name}'s BMI(${JohnBMI.BMI}) is higher than ${MarkBMI.name}'s BMI(${JohnBMI.BMI})`)
};
*/


/////////////////////////////////////////////////////////////////PETLJE


// console.log('Lifting weights repetition 1 💪')
// console.log('Lifting weights repetition 2 💪')
// console.log('Lifting weights repetition 3 💪')
// console.log('Lifting weights repetition 4 💪')
// console.log('Lifting weights repetition 5 💪')
// console.log('Lifting weights repetition 6 💪')
// console.log('Lifting weights repetition 7 💪')
// console.log('Lifting weights repetition 8 💪')
// console.log('Lifting weights repetition 9 💪')
// console.log('Lifting weights repetition 10 💪')

// for loop keeps running while condition (rep <= 10) is TRUE
/*
for(let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 💪`);
}
*/
/*
const jonas = [
    'Jonas',
    'Schmedtann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];



for(let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
   console.log(jonas[i], typeof jonas[i]);


   // Filling types array
   //types[i] = typeof jonas[i]; 
   types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0 ; i < years.length ; i++) {
    ages.push (2037 - years[i]);
}
console.log(ages);

/////////////////////////////////////////////////////// CONTINUE I BREAK

console.log('--- ONLY STRINGS ---')
for(let i = 0; i < jonas.length ; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for(let i = 0; i < jonas.length ; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}
*/


///////////////////////////////////////// RAZLICITE PETLJE //////////////////////////////////
/*
for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
*/
//////////////////////////////////////////////////////////////////////////////////////////////////

const jonas = [
    'Jonas',
    'Schmedtann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];

for(let i = jonas.length - 1; i >= 0; i-- ) {
    console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

for(let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}💪`);
   }
}
