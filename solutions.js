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

// Largest palindrome product
solutions.push(() => {
	var largestPalindromeProduct = undefined;
	for (let i = 100; i < 1000; i++) {
		for (let j = 100; j < 1000; j++) {
			let numStr = (i * j).toString();
			let revNumStr = numStr.split('').reverse().join('');
			if (numStr == revNumStr) {
				largestPalindromeProduct = i * j;
			}
		}
	}
	return largestPalindromeProduct;
});

// Smallest multiple
solutions.push(() => {
	for (let number = 40;; number++) {
		for (let i = 1; i <= 20; i++) {
			if (number % i != 0) break;
			else if (i == 20) return number;
		}
	}
});

// Sum square difference
solutions.push(() => {
	var squaresSum = 0;
	var sumSquare = 0;
	for (let i = 1; i <= 100; i++) {
		squaresSum += i**2;
		sumSquare += i;
	}
	sumSquare **= 2;
	return Math.abs(squaresSum - sumSquare);
});

// 10001st prime
solutions.push(() => {
	var index = 1;
	for (let i = 3; index < 10001; i += 2) {
		if (util.isPrime(i)) index++;
		if (index == 10001) return i;
	}
});

// Largest product in a series
solutions.push(() => {
	var number = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';
	// selStart -> selection start; selEnd -> selection end
	var largestProduct = 0;
	for (let selStart = 0, selEnd = 12; selEnd < 1000; selStart++, selEnd++) {
		var product = 1;
		for (let i = selStart; i <= selEnd; i++) {
			product *= parseInt(number[i]);
		}
		if (product > largestProduct) largestProduct = product;
	}
	return largestProduct;
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
		console.log('\n' + e);
	}
}
