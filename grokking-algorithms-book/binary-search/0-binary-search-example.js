function binarySearch(arr,target) {
	let left = 0, right = arr.length - 1;

	while (left <= right) {
		let mid = Math.round((right + left ) / 2);
		let guss = arr[mid];

		if(guss == target) return mid;
		if(guss > target) right = mid - 1;
		if(guss < target) left = mid + 1;
	}

	return -1; // if not found
}


const arr = [-1,0,1,3,5,7,8,9,11,15,19,100,150,324,555,646,756,875, 990];
const target = 555;

console.log(binarySearch(arr, target))