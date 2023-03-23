'use strict';

let message;
console.log(message);
message = null;
console.log(message);
message = undefined;
console.log(message);

// Tasks
let admin, name;
name = 'John';
admin = name;
name = 'notJohn';
// alert(admin); commenting this out to use nodeJS instead

let currentPlanet = 'Earth',
	currentUser = 'John';

console.log(2 % 2);
console.log(2.2 % 2);
console.log(1 / 0);
console.log(typeof Infinity);
console.log('test' / 2);

//Both Infinity and NaN are typeof numbers, but will never equal another number.

//Primitives check
console.log(typeof 1);
console.log(typeof 999999999999999999999999n);
console.log(typeof BigInt(999999999999999999999999));
console.log(typeof 'Hello');
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Symbol('Hello'));
// non primitive
console.log(typeof { name: 'name' });

//strings magick
console.log(`${admin} got renamed to ${name}`);

// alert("hello")
// let result= prompt("Type something", "Somethin")
let temp = '123';
console.log(Number(temp));
console.log(Boolean('False'));
console.log(Boolean(''));
