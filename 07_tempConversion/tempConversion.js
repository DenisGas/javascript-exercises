const ftoc = function(UsrTemp) {
  return ((Math.ceil((((UsrTemp - 32) * (5/9))*10)))/10)

};

const ctof = function(UsrTemp) {
  return  (Math.ceil(((UsrTemp * (9/5) + 32)*10))/10)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
