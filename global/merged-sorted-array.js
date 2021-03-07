
function mergedSortedArray(arr1, arr2) {
    let mergedArray = []
    let i = 0;
    let j = 0;
    let arr1Item = arr1[i]
    let arr2Item = arr2[j]
    while (arr1Item || arr2Item) {
        if (arr1Item <= arr2Item || !arr2Item) {
            i++
            mergedArray.push(arr1Item)
            arr1Item = arr1[i]
        } else {
            j++
            mergedArray.push(arr2Item)
            arr2Item = arr2[j]
        }
    }
    return mergedArray
}

const arr1 = [1, 10, 12]
const arr2 = [9, 10, 13]
console.log(mergedSortedArray(arr1, arr2)) // [ 1, 9, 10, 10, 12, 13 ]