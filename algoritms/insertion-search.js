function insertion(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] < arr[0]) {
            arr.unshift(arr.splice(i, 1)[0])
        } else {
            for (let j = 1; j < len; j++) {
                if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
                    arr.splice(j, 0, arr.splice(i, 1)[0])
                }
            }
        }
    }
    return arr;
}


console.log(insertion([23, 32, 12, 3, 51, 132, 2, 6, 9, 1]))