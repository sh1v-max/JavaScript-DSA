/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {

    let map = {}
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        map[ch] = map[ch] ? map[ch] + 1 : 1;
    }
    // console.log(map)
    // { s: 4, u: 1, c: 2, e: 2 }
    // ch = s...

    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxV = 0, maxC = 0

    for (let ch in map) {
        count = map[ch] //map[s] = 4
        if (vowels.has(ch)) {
            maxV = Math.max(maxV, count)
        } else {
            maxC = Math.max(maxC, count)
        }
    }
    return maxV + maxC
};