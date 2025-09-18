# Heap Insertion: Min-Heap vs Max-Heap (Heapify-Up)

### Min-Heap Insertion

**Initial Heap:**

```
Binary Tree:
         10
       /    \
     20      15
    /  \    
  30    25

Array: [10, 20, 15, 30, 25]
```

**Insert 5:**

```
Step 1: Add at end
Array: [10, 20, 15, 30, 25, 5]

Binary Tree:
         10
       /    \
     20      15
    /  \    /
  30    25 5
```

```
Step 2: Heapify-Up
5 swaps with 15 -> [10, 20, 5, 30, 25, 15]
5 swaps with 10 -> [5, 20, 10, 30, 25, 15]

Final Heap:
         5
       /    \
     20      10
    /  \    /
  30    25 15
```


### Max-Heap Insertion

**Initial Heap:**

```
Binary Tree:
         50
       /    \
     30      40
    /  \    
  10    20

Array: [50, 30, 40, 10, 20]
```

**Insert 60:**

```
Step 1: Add at end
Array: [50, 30, 40, 10, 20, 60]

Binary Tree:
         50
       /    \
     30      40
    /  \    /
  10    20 60
```

```
Step 2: Heapify-Up
60 swaps with 40 -> [50, 30, 60, 10, 20, 40]
60 swaps with 50 -> [60, 30, 50, 10, 20, 40]

Final Heap:
         60
       /    \
     30      50
    /  \    /
  10    20 40
```



### Key Points (Comparison)

| Operation       | Min-Heap                             | Max-Heap                            |
| --------------- | ------------------------------------ | ----------------------------------- |
| Root Element    | Minimum                              | Maximum                             |
| Insertion Step  | Heapify-Up with **smaller elements** | Heapify-Up with **larger elements** |
| Maintains CBT   | ✅ Complete Binary Tree               | ✅ Complete Binary Tree              |
| Time Complexity | `O(log n)`                           | `O(log n)`                          |
