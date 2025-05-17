## 2622. Cache With Time Limit

`Difficulty - Medium 🟡`


### Description

Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

* `set(key, value, duration)`:
  Accepts an integer `key`, an integer `value`, and a `duration` in milliseconds. Once the duration has elapsed, the key should be inaccessible.
  Returns `true` if the same un-expired key already exists and `false` otherwise. Both the `value` and `duration` should be overwritten if the key already exists.

* `get(key)`:
  If an un-expired key exists, returns the associated value. Otherwise returns `-1`.

* `count()`:
  Returns the count of un-expired keys.

---

#### Example 1:

```
Input:
actions = ["TimeLimitedCache", "set", "get", "count", "get"]
values = [[], [1, 42, 100], [1], [], [1]]
timeDelays = [0, 0, 50, 50, 150]

Output:
[null, false, 42, 1, -1]
```

**Explanation:**

* At t=0, the cache is constructed.
* At t=0, set(1, 42, 100) → returns `false` (key is new).
* At t=50, get(1) → returns `42`.
* At t=50, count() → returns `1`.
* At t=150, get(1) → returns `-1` (key expired).

---

#### Example 2:

```
Input:
actions = ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
values = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
timeDelays = [0, 0, 40, 50, 120, 200, 250]

Output:
[null, false, true, 50, 50, -1, 0]
```

**Explanation:**

* At t=0, the cache is constructed.
* At t=0, set(1, 42, 50) → returns `false`.
* At t=40, set(1, 50, 100) → returns `true`.
* At t=50, get(1) → returns `50`.
* At t=120, get(1) → returns `50`.
* At t=200, get(1) → returns `-1`.
* At t=250, count() → returns `0`.

---

### Constraints:

* `0 <= key, value <= 10⁹`
* `0 <= duration <= 1000`
* `1 <= actions.length <= 100`
* `actions.length === values.length === timeDelays.length`
* `0 <= timeDelays[i] <= 1450`
* `actions[i]` is one of `"TimeLimitedCache"`, `"set"`, `"get"`, `"count"`
* First action is always `"TimeLimitedCache"` and must be executed immediately (0ms delay).
