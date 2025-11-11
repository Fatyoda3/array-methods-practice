const arr = [23, 1, 11, 2, 3];

for (let outer = 0; outer < array.length; outer++) {
  for (let index = outer; index < arr.length; index++) {
    if (arr[index] > arr[index + 1]) {
      [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
    }
  }
}
console.log(arr);
