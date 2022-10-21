const sumAll = function(FirstNum, SecondNum) {
  if((FirstNum < 0 || SecondNum < 0) ||(typeof(FirstNum) != 'number') || (typeof(SecondNum) != 'number')){
    return "ERROR"
  }

  if (FirstNum > SecondNum) {
    FirstNum = FirstNum + SecondNum;
    SecondNum = FirstNum - SecondNum;
    FirstNum = FirstNum - SecondNum;
  }

  let sum = 0;
  for(let i = 0; i < SecondNum; i++){
    sum += FirstNum + i
  }
  return sum

};

// Do not edit below this line
module.exports = sumAll;
