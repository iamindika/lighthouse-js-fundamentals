function concat (pollData1, pollData2) {
  for (let i  = 0; i < pollData2.length; i++) {
    pollData1.push(pollData2[i]);
  }
  return pollData1;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

//merges two already sorted arrays
function merge (pollData1, pollData2) {
  let sortedPollData = [];
  let p1Length = pollData1.length;
  let p2Length = pollData2.length;

  //Continues if both arrays have values
  if ((p1Length !== 0) && (p2Length !== 0)) {
    let p1Index = 0;
    let p2Index = 0;

    //Sets a pointer in each array to sort values while 
    //pushing them into "sortedPollData".
    //will exit once all values from both arrays have been seen.
    while ((p1Index < p1Length) || (p2Index < p2Length)) {

      //Due to while condition it checks for empty arrays for an
      //easy push of the remaining array
      if (!(p1Index < p1Length)) {
        while (p2Index < p2Length) {
          sortedPollData.push(pollData2[p2Index]);
          p2Index++;
        } 
      } else if (!(p2Index < p2Length)) {
        while (p1Index < p1Length) {
          sortedPollData.push(pollData1[p1Index]);
          p1Index++;
        } 
      } else {
        if (pollData1[p1Index] < pollData2[p2Index]) {
          sortedPollData.push(pollData1[p1Index])
          p1Index++;
        } else {
          sortedPollData.push(pollData2[p2Index])
          p2Index++;
        }
      }
    } 
  } else {
    //Checks if one array or the other has values to complete an easy sort.
    //if both are empty, nothing is done and empty an empty array is 
    //returned (See "sortedPollData" declaration).
    if (p2Length !== 0) {
      for (let i = 0; i < p2Length; i++) {
        sortedPollData.push(pollData2[i]);
      } 
    } else if (p1Length !== 0) {
      for (let i = 0; i < p1Length; i++) {
        sortedPollData.push(pollData1[i]);
      }
    }
  }
  return sortedPollData;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);