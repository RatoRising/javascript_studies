let nums = [ -5, 2, 5, 7, 8, 25, 1000 ];

function find_max(nums) {
	let max_num = Number.NEGATIVE_INFINITY;
	for (let num of nums) {
		if (num > max_num) {
			max_num = num;
		}
	}
	return max_num;
}
console.log(find_max(nums));


function checkNumber(smallNumber) {
    if (smallNumber < Number.NEGATIVE_INFINITY) {
      return 'Process number as -Infinity';
    }
    return smallNumber;
  }

  console.log(checkNumber(100))





function find_min(nums) {
	let min_num = Number.POSITIVE_INFINITY;
	for (let num of nums) {
		if (num < min_num) {
			min_num = num;
		}
	}
	return min_num;
}
console.log(find_min(nums));



