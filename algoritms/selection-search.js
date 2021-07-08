function selection(arr) {
    let last = 0
    let smaller = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let ei = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let ej = arr[j];
            if (smaller > ej) {
                smaller = j
                arr[j] = ei
                arr[i] = ej
            } else {
                smaller = ej
            }
        }
    }
    return arr
}


console.log(selection([32, 4, 21, 23, 9, 1, 4, 8, 12]))