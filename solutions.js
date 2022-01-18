// Each function correspond to the solution of a problem

// Problem 1: Multiples of 3 and 5
function p1() {
	let sum = 0;
	for (let i = 3; i < 1000; i++) {
		if (i % 3 == 0 || i % 5 == 0)
			sum += i;
	}
	console.log(sum);
}

module.exports = {
	p1
};
