const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

 function transform(arr) {
	if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
	let cloneArr = arr.slice()
	
	const options = ['--discard-prev', '--discard-next' , '--double-next' , '--double-prev']
	
	for(let i = 0; i < cloneArr.length; i++) {
		
		if(cloneArr[i] === '--discard-next') {
			if(!options.includes(cloneArr[i+1])) {cloneArr.splice(i, 2)}
			else {cloneArr.splice(i,1)}
			
		}
		if(cloneArr[i] === '--double-next') {
			if(cloneArr[i+1] && !options.includes(cloneArr[i+1])) {cloneArr.splice(i, 1, cloneArr[i+1])}
			else {cloneArr.splice(i, 1)}
			
			
		}
		if(cloneArr[i] === '--double-prev') {
			const arrIndex1 = arr.findIndex(el => el === '--double-prev')
			if(cloneArr[i-1] && !options.includes(cloneArr[i-1]) && arr[arrIndex1-2] !== '--discard-next') {cloneArr.splice(i, 1, cloneArr[i-1])}
			else {cloneArr.splice(i, 1)}
			
		}

		if(cloneArr[i] === '--discard-prev') {
			const arrIndex = arr.findIndex(el => el === '--discard-prev')
			
			if(cloneArr[i-1] && !options.includes(cloneArr[i-1]) && arr[arrIndex-2] !== '--discard-next') {cloneArr.splice(i-1, 2)}
			else {cloneArr.splice(i,1)}
			
		}
		
	}
	return cloneArr
}






module.exports = {
  transform
};
