/**
 * 
 * @param {array} arr 
 * @param {index} item 
 */


/**
 * 
 * arr = [1,2,3,4,5,6,7,8]
 * mid = 0 + arr.lengt => mid = 7
 * gusse = arr[mid] => gusse = 8
 * 
 * 
 */
function binarySearch(arr,item) {
	let low = 0;
	let high = arr.length - 1;
	while (low <= high) {
		let mid = Math.round((high + low)/2)
		let gusse = arr[mid]
		if(gusse === item){
			return mid;
		}else if(gusse > item){
			high = mid - 1
		}else{
			low = mid + 1
		}
	}

	return null;
}

console.log(binarySearch([1,2,3,4,5,6,7,8], 1))