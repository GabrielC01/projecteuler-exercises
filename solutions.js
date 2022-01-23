import { argv } from 'process';
// Each function correspond to the solution of a problem

// Utilities
const util = {
	isPrime: function (number) {
		if ([2, 3, 5].indexOf(number) >= 0) return true;
		for (let i = 2; i <= Math.trunc(number / 2); i++) {
			if (number % i == 0) return false;
		}
		return true;
	}
}

// Store all the functions that solve the problems in an array
var solutions = [];

// Problems //
// Multiples of 3 and 5
solutions.push(() => {
	let sum = 0;
	for (let i = 3; i < 1000; i++) {
		if (i % 3 == 0 || i % 5 == 0)
			sum += i;
	}
	return sum;
});

// Even fibonacci numbers
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

// Largest prime factor
solutions.push(() => {
	var number = 600851475143;
	var numberHalf = Math.trunc(number / 2);
	var largestPrimeFactor = 0;
	// A number can't be divide by more than its half, unless by itself
	for (let factor = 2; factor <= numberHalf; factor++) {
		if (number % factor == 0 && util.isPrime(factor))
			largestPrimeFactor = factor;
		console.log(factor);
	}
	return largestPrimeFactor;
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
