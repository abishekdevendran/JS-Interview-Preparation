"use strict";

let x="2";
// unary "-" and "+"
console.log(+x)
// prefix and postfix values same as C
console.log(++x)
console.log(x++)

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