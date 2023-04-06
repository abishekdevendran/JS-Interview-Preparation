'use strict';

let car = 'BMW';
let bike = 'Kawasaki';

let belongings = {
	[car]: 2,
	[bike]: 3
};

console.log(Object.keys(belongings));
console.log("Is BMW one of the user's belongings?: ", 'BMW' in belongings);
console.log("Iterating through the user's belongings:");
for (let key in belongings) {
	console.log(key, belongings[key]);
}

//object keys are integer sorted, force custom order by adding unary ops

function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}

console.log('Is belongings empty?: ', isEmpty(belongings));

function objSum(obj) {
	let sum = 0;
	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			sum += obj[key];
		}
	}
	return sum;
}

console.log('Total belongings: ', objSum(belongings));

function doubler(obj) {
	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			obj[key] *= 2;
		}
	}
}
console.log('Capitalism in progress...');
doubler(belongings);
console.log('60 seconds have passed in Africa, now my belongings are: ');
console.log("Iterating through the user's belongings:");
for (let key in belongings) {
	console.log(key, belongings[key]);
}

console.log('Cloning my properties for my friend Habibi Raju: ');
let clone = {};
// for(let key in belongings){
//   clone[key]=belongings[key]
// }
Object.assign(clone, belongings);
console.log('Now the cloned properties are: ');
for (let key in clone) {
	console.log(key, clone[key]);
}

//for deepcloning, as long as there arent any circular dependencies, JSON.parse(JSON.stringify(obj)) is faster and better then structuredClone()
//best option is lodash, no compromises but dependency heavy

belongings.flaunt = function () {
	console.log(objSum(this));
};
belongings.flaunt();

//if I want to give all my friends bikes and card, manually cloning is too tiresome.
function belongingsFactory(car = 'BMW', Bike = 'Kawasaki') {
	(this[car] = 2), (this[bike] = 3);
  console.log(this);
}

let John = new belongingsFactory();
let Johnny = new belongingsFactory('Lambo');
let Boney = new belongingsFactory('Lambo', 'Scooty Pep');

console.log(John, Johnny, Boney);

//this bahavior is overriden by returning another object in constructure scope.
console.log("All my belongings are my friends belongings.")
function communism(){
  return belongings;
}
John = new communism()
Johnny = new communism();
// since returning different object normally, new keyword makes no difference, "this" created object is lost.
Boney = communism();

console.log(John==Johnny, Johnny==Boney, Boney===John)

//symbols
// global registry, access, or creat new
let id = Symbol.for("id")
let id2 = Symbol.for("id")
console.log("Are the symbols same?: ",id===id2)