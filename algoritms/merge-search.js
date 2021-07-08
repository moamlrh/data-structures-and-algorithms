function mergeSearch(arr) {
    if (arr.length === 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2)
    let right = []
    let left = []
    for (let i = 0; i < arr.length; i++) {
        if (i <= middle) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return merge(
        mergeSearch(left),
        mergeSearch(right),
    )
}

const merge = (left,right) => {
    console.log(left)
}
console.log(mergeSearch([23, 41, 89, 1, 32, 55, 11, 2, 52, 9, 0, 6]))
