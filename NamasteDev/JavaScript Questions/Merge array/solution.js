function mergeData(arr1 = [], arr2 = []) {
  // Your implementation
  const map = new Map()

  for (let item of arr1) {
      map.set(item.id, { ...item })
  }
  
  for (let item of arr2) {
      if (map.has(item.id)) {
          map.set(item.id, { ...map.get(item.id), ...item })
      } else {
          map.set(item.id, { ...item })
      }
  }
  return Array.from(map.values())
}

//For the purpose of user debugging.
//pass your arrays in function call

const arr1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const arr2 = [
  { id: 2, age: 25 },
  { id: 3, name: "Charlie" }
];

// mergeData(arr1, arr2);
mergeData();

module.exports = mergeData