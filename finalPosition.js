function finalPosition (moves) {
  let coordinates = [];
  let x = 0;
  let y = 0;
  for (let move of moves) {
    switch (move) {
    case 'north':
      y += 1;
      break;
    case 'south':
      y -= 1;
      break;
    case 'east':
      x += 1;
      break;
    case 'west':
      x -= 1;
      break;
    }
  }
  coordinates.push(x);
  coordinates.push(y);
  return coordinates;
}


const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];
const moves2 = ['south', 'west', 'west', 'south', 'east', 'north', 'east', 'north'];

console.log(finalPosition(moves));
console.log(finalPosition(moves2));