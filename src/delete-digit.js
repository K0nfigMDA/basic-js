const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
   const result = String(n).split('').map(el => Number(el))

 let resultarr = []

 for(let i = 0; i < result.length; i++) {
	const clone = [...result]
	clone.splice(i,1)
	resultarr.push(Number(clone.join('')))
 }
 	return Math.max(...resultarr)
}



module.exports = {
  deleteDigit
};
