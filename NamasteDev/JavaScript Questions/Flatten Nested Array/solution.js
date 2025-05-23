function flattenArray(arr) {
  // Your implementation
  let arr2 = [...arr]
  console.log(arr2)
  const flattened = arr.reduce((acc, curr) => {
      if (Array.isArray(curr)) {
          return acc.concat(flattenArray(curr));
      } else {
          return acc.concat(curr);
      }
  }, []);
  return flattened;
}

//For the purpose of user debugging.
flattenArray([1, [2, [3, 4], 5], 6]);

module.exports = flattenArray