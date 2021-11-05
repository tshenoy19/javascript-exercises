const reverseString = function (str) {
  const myArray = str.split("");
  console.log(myArray);
  return myArray.reverse().join("");
};
reverseString("hello");
// Do not edit below this line
module.exports = reverseString;
