/* Iterating over a small array 

const packingList = ["tent", "bug spray", "sleeping bag"];

console.log(packingList[0]);
console.log(packingList[1]);
console.log(packingList[2]);

*/

/* Iterating over a larger array using a for loop


const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
	console.log(packingList[i]);
}

*/

// Iterating over an array using a while loop

const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

let i = 0;
while (i < packingList.length){
	console.log(packingList[i]);
	i++;
}
