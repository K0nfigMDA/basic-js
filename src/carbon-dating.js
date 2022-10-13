const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(String) {
	if(typeof String === 'string' && !Number.isNaN(Number(String)) && Number(String) <= 15 && Number(String) > 0) {
	String = Number(String)
	const k = 0.693/HALF_LIFE_PERIOD
	const t = Math.log(MODERN_ACTIVITY/String)/k
	return Math.ceil(t)}
	else {return false}
}

module.exports = {
  dateSample
};
