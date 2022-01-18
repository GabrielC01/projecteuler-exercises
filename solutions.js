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
