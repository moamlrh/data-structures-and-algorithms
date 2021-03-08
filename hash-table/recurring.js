
// Recurring Character
function recurringCharacter(arr) {
    const res = {}
    for (let i = 0; i < arr.length; i++) {
        if(res[arr[i]] !== undefined){
            return arr[i]
        }
        res[arr[i]] = arr[i]
    }
    return false
}

const arr = [2,1,1,2,3,4,5,6,1,2] // 1
// const arr = [1,2,3,4,5,2,1] // 2
console.log(recurringCharacter(arr))