
function reverseString(str) {
    // convert str to array and reverse the array 
    // and then join to string by sperat all chars in array with nothing => join('')
    return str.split('').reverse().join('')
}
const str = 'Hi my name is Moaml RH'
console.log(reverseString(str)) // daiR lmaoM si eman ym iH