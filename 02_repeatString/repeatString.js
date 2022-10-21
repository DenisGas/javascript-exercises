const repeatString = function(string, number) {
  let value = '';

  if(number < 0){
    return "ERROR"
  }

  for(let i = 0; i < number; i++){
    value += string;
  }

  return value;
};

// Do not edit below this line
module.exports = repeatString;
