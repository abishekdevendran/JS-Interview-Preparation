'use strict';

let items = [
	{ name: 'Shek', marks: [1, 2, 3, 4, 5] },
	{ name: 'Fhek', marks: [1, 4, 3, 4, 1] },
	{ name: 'Skek', marks: [1, 2, 6, 4, 5] }
];

function sumReducer(a, b) {
	return a + b;
}

//find student with max marks
console.log(
	items.reduce((acc, student) => {
		let val = student['marks'].reduce(sumReducer);
		let prev = acc['marks'].reduce(sumReducer);
		return val > prev ? student : acc;
	})
);

let maxStudent,
	marks = -1;
for (let i = 0; i < items.length; i++) {
	let sum = 0;
	for (let j = 0; j < 5; j++) {
		sum += items[i]['marks'][j];
	}
	console.log(sum);
	if (sum === Infinity) {
		break;
	}
	if (sum > marks) {
		maxStudent = items[i];
		marks = sum;
	}
}
console.log(maxStudent);

// NAMED LOOPS?!?
// default params for functions are still left-to-right, Typescript justifies stacking defaults to right

async function promisify(func, time){
  await new Promise((resolve)=>{
    setTimeout(resolve,time)
  });
  func();
}

function temp(){
  console.log("yeeeeeeeeee");
}

promisify(temp,1000);
console.log("Race condition?");
