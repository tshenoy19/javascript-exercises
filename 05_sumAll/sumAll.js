const sumAll = function (num1, num2) {
  // If num1 < num2
  let temp = 0;
  if (num1 > num2) {
    temp = num1;
    num1 = num2;
    num2 = temp;
  }
  // Returns ERROR if num1 or num2 are negative numbers
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  // Returns ERROR if numbers are not integers
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  }
  //Function to add the integers between num1 and num2
  let sum = 0;
  for (let i = num1; i < num2 + 1; i++) {
    sum += i;
  }
  return sum;
};

sumAll(1, 5000);

// Do not edit below this line
module.exports = sumAll;
