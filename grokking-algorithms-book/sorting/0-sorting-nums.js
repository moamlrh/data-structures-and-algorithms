function getSmallestNum(arr) {
  let smallest = arr[0];
  let smallesIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallesIndex = i;
    }
  }
  return smallesIndex;
}

function sortArrOfNumbers(arr = []) {
  const newArr = [];
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    const idx = getSmallestNum(arr);
    newArr.push(arr[idx]);
    arr.splice(idx, 1);
  }
  return newArr;
}

console.log(
  sortArrOfNumbers([
    3, 2, 5421, 1243, 5123, 5, 32, 6, 7, 345, 9999, 23, 1, 4, 1,
  ])
);
