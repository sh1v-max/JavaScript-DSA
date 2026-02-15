## 🧭 What is BFS?

**BFS (Breadth-First Search)** is a graph traversal algorithm. It explores all the neighbors (adjacent nodes) of a node **before** going deeper to their neighbors — like spreading outwards in **layers or waves**.

In simple terms:

> **BFS explores level by level, step by step, outward from the starting point.**

## 🧠 Real-life analogy

Imagine you're in a building, and a fire starts in one room. The fire spreads to all connected rooms at the same distance **before** it spreads further.

This is BFS — **equal time reach to all neighbors first**.

## 🟧 In Grid Problems (like Rotting Oranges):

* Think of the grid as a graph:

  * Each cell = node.
  * Adjacent (up/down/left/right) cells = connected nodes.
* BFS helps simulate things that spread outward (like flood, rot, infection, signal).

## 📦 Data Structure Used

**Queue** (FIFO — First In, First Out)

```txt
Start with all rotten oranges in the queue
Each minute:
   - Process all items in the queue (current minute's rot)
   - Spread rot to their neighbors
   - Add newly rotten oranges to the queue (for next minute)
```

## 🧩 Visual Example: Grid

```
Initial:
[2, 1, 1]
[1, 1, 0]
[0, 1, 1]

Minute 0 (queue = [0,0]):
[2, 1, 1]
[1, 1, 0]
[0, 1, 1]

Minute 1 (queue = [0,1], [1,0]):
[2, 2, 1]
[2, 1, 0]
[0, 1, 1]

Minute 2 (queue = [0,2], [1,1]):
[2, 2, 2]
[2, 2, 0]
[0, 1, 1]

...
```

## ✅ Why BFS here?

Because:

* We need to simulate time progression.
* Each rotten orange affects adjacent cells **at the same time**.
* It's level-wise — that's exactly what BFS does.
