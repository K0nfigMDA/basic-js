const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(arr2) {
	if(Array.isArray(arr2)) {
	const result = arr2.filter(el => typeof el === 'string')
	const resultarr = []
	for(let i=0; i < result.length; i++) {
		resultarr.push(result[i].trim()[0].toUpperCase())
	}
		return resultarr.sort().join('')}
	else {return false}
}

module.exports = {
  createDreamTeam
};
