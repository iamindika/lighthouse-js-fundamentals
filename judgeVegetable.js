let judgeVegetable = function (vegetables, metric) {
  let highestRank = null;
  vegetables.forEach (function (vegetableObj, index, vegeArray) {
    if ((highestRank === null) || (vegetableObj[metric] > vegeArray[highestRank][metric])) {
      highestRank = index;
    } 
  });
  return vegetables[highestRank].submitter;
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 20,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 18
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 14,
    plumpness: 3
  }
]

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));