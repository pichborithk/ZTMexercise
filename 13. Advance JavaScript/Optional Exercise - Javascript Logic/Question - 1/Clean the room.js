const array1 = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const array2 = [1, '2', '3', 2];

function packNum(arr) {
  arr.sort((b, a) => b - a);
  let subArr = [...arr];
  let result = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else if (arr[i] !== arr[i + 1] && arr[i] === arr[i - 1]) {
      let subResult = subArr.splice(0, count + 1);
      result.push(subResult);
      count = 0;
    } else {
      result.push(arr[i]);
      subArr.shift();
    }
  }
  return result;
}

console.log(packNum(array1));

function sortByType(arr) {
  let result = [[], []];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      result[1].push(arr[i]);
    } else if (typeof arr[i] === 'number') {
      result[0].push(arr[i]);
    }
  }
  return result;
}

console.log(sortByType(array2));
