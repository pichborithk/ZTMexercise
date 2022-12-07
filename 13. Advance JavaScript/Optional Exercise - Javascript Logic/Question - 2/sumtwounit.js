const array1 = [1, 2, 3];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumTwoUnit(arr, total) {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    let subResult = [];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        subResult = [arr[i], arr[j]];
        console.log(subResult);
        result.push(subResult);
      }
    }
  }
  if (result.length === 1) {
    result = result.flat();
  }
  return result;
}

console.log(sumTwoUnit(array1, 4));
console.log(sumTwoUnit(array2, 15));
