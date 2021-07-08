const recursion = n => {
    if (n < 2) {
        return n
    }
    return recursion(n-1) + recursion(n-2) 
}
console.log(recursion(8))
/*
    8 => 8+7+6+5+4+3+2+1+0
*/