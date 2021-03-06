function checkIfTheSameChars(str1, str2) {
    const chars = {}
    for (char of str1) {
        if (char === ' ' || char === '' || char.length === 0);
        else {
            if (chars[char]) chars[char] += 1
            else chars[char] = 1
        }
    }
    for (char of str2) {
        if (char === ' ' || char === '' || char.length === 0);
        else {
            if (chars[char]) {
                chars[char] -= 1
                if(!chars[char]) delete chars[char]
            }
            else return false
        }
    }
    for (let char in chars) {
        if (chars[char]) return false
        else return true
    }
}

console.log(checkIfTheSameChars('abbaaam', 'baaadsfsadfaba'))