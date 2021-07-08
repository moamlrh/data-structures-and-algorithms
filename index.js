
function checkIfTheSameChars(str1, str2) {
  [s1, s2, s3] = [
    (str1.split("")).filter(i => {return i !== " "}), 
    (str2.split("")).filter(i => {return i !== " "}),
    []
  ]
  
  if(s1.length > s2.length || s2.length > s1.length){
    return false
  } else {
    for(let i = 0; i < s1.length; i++){
      s3[i] = s1[i]
      s1[i] = ""
      for(let j = 0; j < s2.length; j++)
        if(s3[i] === s2[j]){
          s2[j] = ""
          break
        }
    }
    [s1, s2] = [
      s1.filter(i => {return i !== ""}),
      s2.filter(i => {return i !== ""})
    ]
    return (s1.length === s2.length && s1.length === 0)
  }
  
}
console.log(checkIfTheSameChars("a hmed", "ahmed"))
console.log(checkIfTheSameChars("ahmed", "demmh"))
