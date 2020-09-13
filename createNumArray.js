function range (start, end, step) {
  let numArray = [];
  if ((start != undefined) && (end != undefined) && (step != undefined)) {
    if (!(start > end)) {
      if (!(step <= 0)) {
        for (let i = start; i <= end; i += step) {
          numArray.push(i);
        }
      }
    }
  }
  return numArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));