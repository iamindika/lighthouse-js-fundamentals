const whichSchool = function(age) {
  let school = "";
  if (age < 13){
    school = "Elementary School";
  } else if (age <= 18) {
    school = "Secondary School";
  } else {
    school = "Lighthouse Labs";
  }
  return school;
}

console.log("I am 9, which school do I go to?");
console.log(whichSchool(9));

console.log("I am 13, which school do I go to?");
console.log(whichSchool(13));

console.log("I am 18, which school do I go to?");
console.log(whichSchool(18));

console.log("I am 21, which school do I go to?");
console.log(whichSchool(21));