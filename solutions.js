import { argv } from 'process';
// Each function correspond to the solution of a problem

var solutions = [];

// Problem 1: Multiples of 3 and 5
solutions.push(() => {
	let sum = 0;
	for (let i = 3; i < 1000; i++) {
		if (i % 3 == 0 || i % 5 == 0)
			sum += i;
	}
	return sum;
});

solutions.push(() => {
	function fibo(n) {
		if (n <= 2) {
			return n;
		}
		return fibo(n - 1) + fibo(n - 2);
	}
	
	let sum = 0;
	for (let i = 2; sum <= 4*10**6; i++) {
		if (fibo(i) % 2 == 0) {
			sum += fibo(i);	
		}
	}
	return sum;
});


// CLI argument handling
if (argv.length <= 2) {
	console.log('Please, inform the number that corresponds to the problem.');
	console.log('Check the list of problems on projecteuler.net');
	process.exit(0);
} else {
	try {
		console.log('Solution: ' + solutions[argv[2]-1]());
	} catch (e) {
		console.log('Solution not found');
	}
}
