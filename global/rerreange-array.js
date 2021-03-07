function rerRrangeArray(arr) {
    let pos = [], neg = [], res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) neg.push(arr[i])
        else pos.push(arr[i])
    }

    let length = pos.length > neg.length ? pos.length : neg.length;
    for (let i = 0; i < length; i++) {
        pos[i] !== undefined && res.push(pos[i])
        neg[i] !== undefined && res.push(neg[i])
    }
    return res
}

// const arr = [9, 4, -2, -1, 5, 0, -5, -3, 2]  // 9 -2 4 -1 5 -5 0 -3 2
const arr = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]
console.log(rerRrangeArray(arr))