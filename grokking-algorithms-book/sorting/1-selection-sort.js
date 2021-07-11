function selectionSort(arr) {
  let times = 0;
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      times += 1;
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i != min) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  console.log(times);
  return arr;
}

console.log(selectionSort([9, 8, 6, -1, 0, -23, 55, -100, 399, 23]));
