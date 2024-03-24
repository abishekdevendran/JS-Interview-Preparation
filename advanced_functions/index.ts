console.log('index.js');

for (let i = 0; i < 5; i++) {
	console.log(Math.pow(2, i));
}

function pow(x, n) {
	return n == 1 ? x : x * pow(x, n - 1);
}

console.log(pow(2, 3)); // 8

// Sum all numbers till the given one
// For loop
function summer(n) {
	let sum = 0;
	for (let i = 0; i < n; i++) {
		sum += i + 1;
	}
	return sum;
}

console.log(summer(100));

function sumTo(n) {
	if (n === 1) return 1;
	return sumTo(n - 1) + n;
}

console.log(sumTo(100));
console.log((100 * 101) / 2);

let cache = {
	1: 1,
	2: 1
};

function fib(n) {
	if (n === 1) return 1;
	if (n === 2) return 1;
	// console.log(Object.keys(cache));
	if (Object.keys(cache).includes(String(n))) {
		// console.log("Here");
		return cache[n];
	}
	let temp = fib(n - 2) + fib(n - 1);
	cache[n] = temp;
	// console.log("Cache: ", cache);
	return temp;
}

console.log(fib(78));

function printNumbers(from: number, to: number) {
	if (to < from) return;
	let temp = from;
	// let interval=setInterval(()=>{
	//   if(temp>=to) clearInterval(interval)
	//   console.log(temp);
	//   temp++;
	// },1000)
	let func = () => {
		console.log(temp);
		temp++;
		if (temp <= to) {
			setTimeout(func, 1000);
		}
	};
	func();
}

// printNumbers(5, 10);

function randNumGen() {
	return Math.floor(Math.random() * 10);
}

function hash(args: IArguments) {
	// let temp = '';
	// for(let i=0;i<args.length;i++){
	//   temp+=args[i];
	// }
	// return temp;
	return [].join.call(args); // method borrowing
}

function cacheDecorator(func: (...args: any[]) => unknown) {
	let cache = new Map();
	return function () {
		// can't use arrow function as no this and arguments
		let key = hash(arguments);
		if (cache.has(key)) {
			return cache.get(key);
		}
		console.log('MISS');
		let temp = func.apply(this, arguments);
		cache.set(key, temp);
		return temp;
	};
}

let cached = cacheDecorator(randNumGen);
console.log('Here');

console.log(cached());
console.log(cached());
console.log(cached());
console.log(cached());
console.log(cached());
console.log(cached());
console.log(cached());
console.log(cached());

let work = function (a: number, b: number) {
	return a + b;
};

let spy = (func: (...args: any[]) => unknown) => {
	function wrapper(...args: any[]) {
		wrapper.calls.push([...arguments]);
		return func(...args);
	}
	wrapper.calls = [];
	return wrapper;
};

let delayer = (func: (...args: any[]) => unknown, ms: number) => {
	return function (...args: any[]) {
		setTimeout(func, ms, ...args);
	};
};

let spyWork = spy(work);

console.log(spyWork(1, 2));
console.log(spyWork(4, 5));

for (let args of spyWork.calls) {
	console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}

// delayer(() => console.log('I COOKED!'), 1000)();

let debouncer = (func: (...args: any[]) => unknown, ms: number) => {
	let activeTimer: number | null = null;
	return function (...args: any[]) {
		if (activeTimer) clearTimeout(activeTimer);
		activeTimer = setTimeout(() => func.apply(this, args), ms);
	};
};

let debouncedCook = debouncer(
	(str: string) => console.log('I HAVE COOKED some ' + str),
	1000
);

// debouncedCook('a');
// setTimeout(() => debouncedCook('b'), 200);
// setTimeout(() => debouncedCook('c'), 500);

let throttler = (func: (...args: any[]) => unknown, ms: number) => {
	let isThrottling: boolean = false;
	let lastArgs: IArguments | null = null;
	let lastThis: any = null;
	return function (...args: any[]) {
		if (!isThrottling) {
			isThrottling = true;
			setTimeout(function () {
				isThrottling = false;
				if (lastThis) {
					func.apply(lastThis, lastArgs);
					lastArgs = lastThis = null;
				}
			}, ms);
			func.apply(this, arguments);
		} else {
			lastThis = this;
			lastArgs = arguments;
			isThrottling = true;
		}
	};
};

let throttledCook = throttler(
	(str: string) => console.log('DAMN: ' + str),
	1000
);

throttledCook(4); // shows 1
throttledCook(5); // (throttling, 1000ms not out yet)
throttledCook(6); // (throttling, 1000ms not out yet)
