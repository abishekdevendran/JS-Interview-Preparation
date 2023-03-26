'use strict';

let x = '2';
// unary "-" and "+"
console.log(+x);
// prefix and postfix values same as C
console.log(++x);
console.log(x++);

// '' + 1 + 0; "10"
// '' - 1 + 0; "- cannot work with strings, so only unary, -1)
// true + false; true
// 6 / '3'; 2
// '2' * '3'; 6
// 4 + 5 + 'px'; 9px
// '$' + 4 + 5; $45
// '4' - 2; 2
// '4px' - 2; NaN
// '  -9  ' + 5; "-9 5"
// '  -9  ' - 5; -14
// null + 1; null gets type converted to 0, 1
// undefined + 1; gets typeconverted to NaN, NaN
// ' \t \n' - 2; special chars are trimmed, so empty string, -2

// 5>4 true
// "apple" > "pineapple" false
// "2" > "12" true
// undefined == null true only each other
// undefined === null false
// null == "\n0\n" false
// null === +"\n0\n" false

if ('0') {
	console.log('Hello');
	// string "0" is truthy
}

// The name of JavaScript
prompt('What is the “official” name of JavaScript?', '').toLowerCase() ===
'ECMAScript'.toLowerCase()
	? alert('Right!')
	: alert('You don’t know? “ECMAScript”!');

//rewrite if into ?
result = a + b < 4 ? 'Below' : 'Over';

//rewrite if else intolet ?
let message =
	login === 'Employee'
		? 'Hello'
		: login === 'Director'
		? 'Greetings'
		: login === ''
		? 'No Login'
		: '';

// alert( null || 2 || undefined ); first truthy value:2
// alert(alert(1) || 2 || alert(3)); 1, returns undefined, then 2
// alert( 1 && null && 2 ); first falsy value: null
// alert( alert(1) && alert(2) ); 1, stops eveal, then undefined
// after and, first truthy value is 3
// 
// if (-1 || 0) alert( 'first' ); execs
// if (-1 && 0) alert( 'second' ); not
// if (null || -1 && 1) alert( 'third' ); execs

