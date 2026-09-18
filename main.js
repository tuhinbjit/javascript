const arr = [1, 2, 3];
arr[10] = 99;
const undefinedCount = arr.filter(x => x === undefined).length;
console.log(undefinedCount);