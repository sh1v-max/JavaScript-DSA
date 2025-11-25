// 621. Task Scheduler
// https://leetcode.com/problems/task-scheduler/

// You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.

// Your goal is to determine the minimum number of intervals the CPU will take to finish all the given tasks.

// Example 1:
// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: A -> B -> idle -> A -> B -> idle -> A -> B
// After completing task A, you must wait two intervals before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th interval, you can do A again as 2 intervals have passed.

// Example 2:
// Input: tasks = ["A","C","A","B","D","B"], n = 1
// Output: 6
// Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.
// With a cooling interval of 1, you can repeat a task after just one other task.

// Example 3:
// Input: tasks = ["A","A","A", "B","B","B"], n = 3
// Output: 10
// Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
// There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.

// task scheduler — greedy frequency + formula approach
// intuition:
// - the task that occurs most frequently (maxFreq) determines the minimum length of the schedule
//   because it creates the most "pressure" for spacing due to the cooldown n
// - imagine arranging the most frequent task first:
//       we create "groups" where each group is size n+1 (1 task + n cooldown slots)
//       for example, if maxFreq = 3 and n = 2, we can think of the schedule as:
//           group1: A _ _
//           group2: A _ _
//           group3: A
//       here "_" represents either idle or other tasks filling the slot
// - (maxFreq - 1) → number of full groups we need (we don't count the last occurrence yet because it doesn't require trailing cooldowns)
// - (n + 1) → size of each group: 1 occurrence of the task + n cooldown slots
// - countMaxFreq → handles cases where multiple tasks share the same max frequency
//       for example, if both A and B appear 3 times and n = 2, the last positions of each group need to accommodate both tasks
// - formula: (maxFreq - 1) * (n + 1) + countMaxFreq
//   - calculates minimum intervals including unavoidable idle slots
// - finally, return max(tasks.length, cycles):
//       - if there are enough tasks to fill the idle slots, total time is just tasks.length
//       - if idle slots are unavoidable, formula gives correct minimum

// approach:
// - create frequency array of size 26
// - count occurrences of each task
// - find max frequency (maxFreq)
// - count how many tasks have maxFreq (countMaxFreq)
// - compute cycles using formula: (maxFreq - 1) * (n + 1) + countMaxFreq
// - return max(tasks.length, cycles)

var leastInterval = function (tasks, n) {
  const freq = Array(26).fill(0)
  let maxFreq = 0

  for (let i = 0; i < tasks.length; i++) {
    let curr = tasks[i].charCodeAt(0) - 65
    freq[curr]++
    maxFreq = Math.max(maxFreq, freq[curr])
  }

  let countMaxFreq = 0
  for (let i = 0; i < 26; i++) {
    if (freq[i] === maxFreq) {
      countMaxFreq++
    }
  }

  let cycles = (maxFreq - 1) * (n + 1) + countMaxFreq
  return Math.max(tasks.length, cycles)
}

// time: // o(n)
// - counting frequencies + finding max + counting tasks with max frequency
// space: // o(1)
// - frequency array of fixed size 26