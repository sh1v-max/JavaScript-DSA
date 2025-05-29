/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
  let res = 0
  for( let i = 0; i < hours.length; i++){
      if(hours[i] >= target){
          res++
      }
  }
  console.log(res)
  return res
};