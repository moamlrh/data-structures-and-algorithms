function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let curr = i;
    let r = curr + 1;
    if (arr[curr] > arr[r]) {
      let tmp = arr[curr];
      arr[curr] = arr[r];
      arr[r] = tmp;
      if (arr[i - 1] != undefined && arr[i - 1] > arr[i]) {
        for (let j = i - 1; j >= 0; j--) {
          let prev = j - 1;
          if (arr[j] > arr[prev]) {
            let tmp = arr[prev];
            arr[prev] = arr[j];
            arr[j] = tmp;
          }
        }
      }
    }
  }
  return arr;
}

console.log(selectionSort([9, 8, 6, -1, 0, -23, 55, -100, 399, 23]));
