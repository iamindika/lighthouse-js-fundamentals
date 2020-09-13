const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("Using a while loop to print out all ingredients:");
let i = 0;
while (i < ingredients.length) {
	console.log(ingredients[i]);
	i++;
}

console.log("\nUsing a for loop to print out all ingredients:");
for (let i = 0; i < ingredients.length; i++) {
	console.log(ingredients[i]);
}

console.log("\nUsing a for loop to print out all ingredients BACKWARDS!!:");
for (let i = ingredients.length - 1; i >= 0; i--) {
	console.log(ingredients[i]);
}
