const leapYears = function(UsrYear) {

  // if((UsrYear % 400 === 0) || (UsrYear % 4 === 0 && UsrYear %100 !== 0)){
  //   return true;
  // }

  //  return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
  
  return ((UsrYear % 400 === 0) || (UsrYear % 4 === 0 && UsrYear %100 !== 0))

  

  
};




// Do not edit below this line
module.exports = leapYears;
