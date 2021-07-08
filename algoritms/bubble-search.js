function bubble(arr) {
    if (!arr.length) {
        return arr;
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
           if (arr[i] > arr[j]) {
               let prev = arr[j]
               let dele = arr[j-1]
               arr[j] = arr[i]
               arr[j-1] = prev
           }
        }
    }
    return arr
}

console.log(bubble([2, 8, 7, 3, 4, 5, 6, 1, 10]))