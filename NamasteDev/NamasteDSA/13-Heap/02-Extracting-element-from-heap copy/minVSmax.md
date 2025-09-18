# Heap Extraction: Min-Heap vs Max-Heap

### Min-Heap Extraction

**Initial Heap:**

```
Binary Tree:
         5
       /    \
     20      10
    /  \    /
  30    25 15

Array: [5, 20, 10, 30, 25, 15]
```

**Step 1: Move last element (15) to root**

```
Binary Tree:
         15
       /    \
     20      10
    /  \    
  30    25

Array: [15, 20, 10, 30, 25]
```

**Step 2: Heapify-Down (Swap with smaller child)**

```
Binary Tree:
         10
       /    \
     20      15
    /  \    
  30    25

Array: [10, 20, 15, 30, 25]
```


### Max-Heap Extraction

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

**Step 1: Move last element (20) to root**

```
Binary Tree:
         20
       /    \
     30      40
    /       
  10       

Array: [20, 30, 40, 10]
```

**Step 2: Heapify-Down (Swap with larger child)**

```
Binary Tree:
         40
       /    \
     30      20
    /       
  10       

Array: [40, 30, 20, 10]
```


### Key Points (Comparison)

| Operation       | Min-Heap                            | Max-Heap                           |
| --------------- | ----------------------------------- | ---------------------------------- |
| Root Element    | Minimum                             | Maximum                            |
| Extraction Step | Heapify-Down with **smaller child** | Heapify-Down with **larger child** |
| Time Complexity | `O(log n)`                          | `O(log n)`                         |


