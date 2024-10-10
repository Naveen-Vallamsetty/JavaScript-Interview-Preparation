### Problem Statement: All Longest Strings (Easy Level)

You are given an array of strings. Your task is to find **all the longest strings** in the array and return them.

### Requirements:

- **Input**: An array of strings `inputArray` where `1 ≤ inputArray.length ≤ 10^4` and `1 ≤ inputArray[i].length ≤ 10^4`.
- **Output**: Return an array containing all the strings from the input that have the **maximum** length.

### Example:

#### Example 1:

**Input**:

```javascript
inputArray = ["aba", "aa", "ad", "vcd", "aba"];
```

**Output**:

```javascript
["aba", "vcd", "aba"];
```

**Explanation**: The strings "aba" and "vcd" have the maximum length of 3, so they are included in the result.

#### Example 2:

**Input**:

```javascript
inputArray = ["abc", "eeee", "abcd", "dcd"];
```

**Output**:

```javascript
["eeee", "abcd"];
```

**Explanation**: The strings "eeee" and "abcd" are the longest, both having a length of 4.

#### Example 3:

**Input**:

```javascript
inputArray = ["a", "b", "c", "d"];
```

**Output**:

```javascript
["a", "b", "c", "d"];
```

**Explanation**: All strings have the same length, so they are all returned.

### Constraints:

- All strings in the input array are non-empty and consist of lowercase and/or uppercase English letters.
