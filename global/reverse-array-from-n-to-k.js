let temp;
function reverseArrayFromNthToKth(arr, n, k) {
    while (n < k) {
        temp = arr[n]
        arr[n] = arr[k]
        arr[k] = temp
        n++
        k--
    }
    return arr  // [ 1, 2, 3, 6, 4, 5 ]
}
const arr = [1, 2, 3, 4, 5, 6]
console.log(reverseArrayFromNthToKth(arr, 1, 5)) 