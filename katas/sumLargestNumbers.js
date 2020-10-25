const sumLargestNumbers = function (data) {
  let large1;
  let large2;
  if (data[0] > data[1]) {
    large1 = data[0];
    large2 = data[1];
  } else {
    large1 = data[1];
    large2 = data[0];
  }
  for (let i = 2; i < data.length; i++) {
    if (data[i] > large1) {
      large2 = large1;
      large1 = data[i];
    } else if (data[i] > large2) {
      large2 = data[i];
    }
  }
  return large1 + large2;
}; 

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

