function formLargestNumber(arr) {
  //write your implementation here
  const strNums = arr.map(String);

  // Custom sort: compare combined strings
  strNums.sort((a, b) => (b + a).localeCompare(a + b));

  // Edge case: if the largest number is '0', the whole number is 0
  if (strNums[0] === '0') return '0';

  // Join sorted parts to form the largest number
  return strNums.join('');
}
const input = [3, 30, 34, 5, 9];
formLargestNumber(input);
module.exports = formLargestNumber;
