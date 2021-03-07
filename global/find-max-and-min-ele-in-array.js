function findMaxAndMinElementsInArrayOfNumber(arr) {
    let max = arr[0], min = arr[1];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] >= max && arr[i] > min) max = arr[i]
        else if (arr[i] < min) min = arr[i]
    }
    return { max, min }
}

const arr = [1, 65, 34, 54, 76, 32, 3, 45, 0, 21, 2, 25, 1]
console.log(findMaxAndMinElementsInArrayOfNumber(arr))