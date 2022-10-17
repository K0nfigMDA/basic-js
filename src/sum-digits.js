const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function getSumOfDigits(n) {
	
	const result = (String(n).split('').map(el => Number(el)).reduce((sum, el) => {return sum + el}))
	if(result > 9) {return getSumOfDigits(result)}
	else{return result}



}

console.log(getSumOfDigits(2523))

module.exports = {
  getSumOfDigits
};
