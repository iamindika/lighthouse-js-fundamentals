function lastIndexOf (numArray, numSearch) {
  lastSeenAt = -1;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] === numSearch) {
      lastSeenAt = i;
    }
  }
  return lastSeenAt;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);