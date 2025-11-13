// knap sack problem using greedy algorithm

// problem statement:
// given n items where each item has some weight and profit associated with it and also given a bag with capacity W, [i.e., the bag can hold at most W weight in it]
// the task is to put the items into the bag such that the sum of profits associated with them is the maximum possible.
// value = {60, 100, 120}, Weight = {10, 20, 30}, weight only carry = 50kg
// unlike the 0/1 knapsack (where you either take the whole item or none),
// here we can take fractions of an item if the full one doesn’t fit.

// intuition:
// since the bag has limited capacity, we cannot take all items, so we must choose them wisely
// instead of directly picking the highest value items, we should compare items based on their value-to-weight ratio (value per unit weight)
// so we calculate the "value-to-weight ratio" for each item,
// sort them in descending order, and pick from the top.
// keep adding until the bag is full. if the next item doesn’t fit,
// we take only the fraction that fits.

function fractionalKnapSack(weights, values, capacity) {
  const n = values.length

  // calculating value/weight ration
  const items = []
  for (let i = 0; i < n; i++) {
    const ratio = values[i] / weights[i]
    items.push({ value: values[i], weight: weights[i], ratio })
  }

  // sort items by ratio in descending order
  items.sort((a, b) => b.ratio - a.ratio)

  let totalValue = 0
  let remainingCapacity = capacity

  // pick items, greedy approach
  for (let item of items) {
    // bag's full
    if (remainingCapacity === 0) break

    // if the full item can fit, take it all
    if (item.weight <= remainingCapacity) {
      totalValue += item.value
      remainingCapacity -= item.weight
    } else {
      // take only the fraction that fits
      const fraction = remainingCapacity / item.weight
      totalValue += item.value * fraction
      // bag is now full
      remainingCapacity = 0
    }
  }
  return totalValue
}

const values = [60, 100, 120]
const weights = [10, 20, 30]
const capacity = 50

console.log(fractionalKnapSack(weights, values, capacity))
// output: 240

// time complexity: O(n log n) due to sorting
// space complexity: O(n) for storing items with their ratios
