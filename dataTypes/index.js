'use strict';

let str1 = 'Hello';
console.log(str1.toUpperCase());

let billion = 1_000_000_000;
console.log(billion === 1000000000);
let anotherBillion = 1e9;
console.log(anotherBillion === 1000000000);

console.log(0xff === 0b11111111 && 0xff === 0o377);

console.log(String(billion) === billion.toString());
console.log(String(billion) === (1000000000).toString());

let stuff = {
	one: 1n,
	two: 2n
};

console.log(stuff);
// console.log(JSON.stringify(stuff)) doesnt work
console.log(+(64).toString(2));
console.log(isFinite(1));
// console.log(1n..toString()) this works but linter doesnt quite agree with me
console.log(isFinite(1n.toString()));

//to use negative indices with strings
let str = 'anythingIWant';
console.log('Last letter of anythingIWant is', str.at(-1));

console.log(parseFloat('$120.45'.slice(1)));

const name = 'Kate';
console.log(name.at(-1));
console.log(name.at(-2));

let fruits = ['apple', 'orange', 'banana', 'grape'];
console.log(fruits.sort());
//sort is stable since ES6
console.log(
	fruits.sort((a, b) => {
		return String(a).length - String(b).length;
	})
);
// push and pop  faster than shift/unshift.

console.log(fruits.join(' ').split(' '));

let test = 'I friggin love ECMAScript!';
let replacement = 'forking hate';
test = test.split(' ');
replacement = replacement.split(' ');
console.log(test);
console.log(replacement);
test.splice(1, 2, ...replacement); // 2 items from index 1
console.log(test);

test.forEach((item, index) => {
	console.log(index, ' : ', item);
});

console.log(
	test.reduce((a, b) => {
		return a.length > b.length ? a : b;
	})
);

console.log(test.sort((a, b) => a.length - b.length).at(-1));

console.log('The index of "forking" is at: ', test.indexOf('forking'));
console.log('The index of "farking" is at: ', test.indexOf('farking'));

let john = { name: 'John', surname: 'Smith', id: 1, age: 11 };
let pete = { name: 'Pete', surname: 'Hunt', id: 2, age: 13 };
let mary = { name: 'Mary', surname: 'Key', id: 3, age: 15 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => {
	return { fullName: user.name + ' ' + user.surname, id: user.id };
});

console.log('usersMapped: ', usersMapped);

function ageSorter(arr) {
	arr.sort((a, b) => a.age - b.age);
}
function randomSorter(arr) {
	arr.sort((a, b) => 0.5 - Math.random());
}
function trulyRandomSorter(arr) {
	for (let i = arr.length - 1; i >= 0; i--) {
		// get random index between 0 and i
		let randIdx = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[randIdx]] = [arr[randIdx], arr[i]];
	}
}
ageSorter(users);
console.log(users);
// randomSorter(users)
// console.log(users)
trulyRandomSorter(users);
console.log(users);

//get avg age of users
console.log(users.reduce((sum, user) => sum + user.age, 0) / users.length);

let strings = [
	'Hare',
	'Krishna',
	'Hare',
	'Krishna',
	'Krishna',
	'Krishna',
	'Hare',
	'Hare',
	':-O'
];

function uniqueLogger(arr) {
	// let dict = {};
	// arr.forEach((word) => (dict[word] = 'yup'));
	// return Object.keys(dict);
	// return arr.filter((value, idx) => arr.indexOf(value) === idx);
	let words = Array.from(new Set(strings));
	return words;
}

console.log(uniqueLogger(strings));

let usersFinal = users.reduce((acc, user) => {
	acc[user.name] = user;
	return acc;
}, {});
console.log(usersFinal);

let nums = [1, 3, 5, 7, 9];
// const oongaBunga = 12;

// let sumNums = nums.reduce((acc, num) => {
// 	if(acc.length === 0){
// 		acc.push(num + oongaBunga);
// 		return acc;
// 	}
// 	acc.push(num + oongaBunga);
// 	return acc;
// }, []);
// console.log('sunNums is ', sumNums);

for (let prop in john) {
	console.log(john[prop]);
}

// Making an iterator
let iter = {
	from: 1,
	to: 10
};

iter[Symbol.iterator] = function () {
	return {
		current: this.from,
		last: this.to,
		next() {
			if (this.current <= this.last) {
				return { done: false, value: this.current++ };
			} else {
				return { done: true };
			}
		}
	};
};

for (let num of iter) {
	console.log(num);
}

let strObj = Object.assign({}, strings);
console.log(strObj);

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function aSort(arr){
	let watcher = new Map();
	arr.forEach((val)=>{
		let ke=val.toLowerCase().split("").sort().join("");
		watcher.set(ke, val);
	});
	return Array.from(watcher.values());
}

let smolArr = aSort(arr);
console.log(smolArr)
